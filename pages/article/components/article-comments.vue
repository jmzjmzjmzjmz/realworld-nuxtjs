<template>
  <div>
    <form class="card comment-form" @submit.prevent="toAddComments">
      <div class="card-block">
        <textarea class="form-control" placeholder="Write a comment..." rows="3" v-model="commentContent"></textarea>
      </div>
      <div class="card-footer">
        <img src="http://i.imgur.com/Qr71crq.jpg" class="comment-author-img" />
        <button class="btn btn-sm btn-primary">
        Post Comment
        </button>
      </div>
    </form>

    <div
      class="card"
      v-for="(comment,index) in comments"
      :key="comment.id"
    >
      <div class="card-block">
        <p class="card-text">{{ comment.body }}</p>
      </div>
      <div class="card-footer" style="display:flex;justify-content:space-between">
       <div>
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          <img :src="comment.author.image" class="comment-author-img" />
        </nuxt-link>
        &nbsp;
        <nuxt-link class="comment-author" :to="{
          name: 'profile',
          params: {
            username: comment.author.username
          }
        }">
          {{ comment.author.username }}
        </nuxt-link>
        <span class="date-posted">{{ comment.createdAt | date('MMM DD, YYYY') }}</span>
       </div>
       <div @click="deleteComment(comment.id,index)">
       <i class="ion-trash-a"></i>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getComments,addComments,deleteComments } from '@/api/article'

export default {
  name: 'ArticleComments',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      comments: [], // 文章列表
      commentContent:""
    }
  },
  async mounted () {
    const { data } = await getComments(this.article.slug)
    this.comments = data.comments
     this.comments.forEach(comments => comments.deleteDisabled = false)
  },
  methods:{
    toAddComments(){
      addComments(this.article.slug,{comment:{body:this.commentContent}}).then(res=>{
        let comment = res.data.comment
        comment.deleteDisabled = false
        this.comments.push(comment)
        this.commentContent=""
      })
    },
    deleteComment(id,index){
      if(this.comments[index].deleteDisabled == false){
         this.comments[index].deleteDisabled = true
        deleteComments(this.article.slug,id).then(res=>{
          this.comments.splice(index,1)
        })
      }
       
    }
  }
}
</script>

<style>

</style>
