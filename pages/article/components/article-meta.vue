<template>
  <div class="article-meta">
    <nuxt-link :to="{
      name: 'profile',
      params: {
        username: article.author.username
      }
    }">
      <img :src="article.author.image" />
    </nuxt-link>
    <div class="info">
      <nuxt-link class="author" :to="{
        name: 'profile',
        params: {
          username: article.author.username
        }
      }">
        {{ article.author.username }}
      </nuxt-link>
      <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
    </div>
    <button
      v-if="article.author.username!=user.username"
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
    >
      <i class="ion-plus-round"></i>
      &nbsp;
      Follow Eric Simons <span class="counter">(10)</span>
    </button>
    <button
      v-if="article.author.username==user.username"
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
      @click="$router.push('/editor/'+article.slug)"
    >
      <i class="ion-edit"></i>
      &nbsp;
       Edit Article<span class="counter"></span>
    </button>
    &nbsp;&nbsp;
    <button
    v-if="article.author.username!=user.username"
      class="btn btn-sm btn-outline-primary"
      :class="{
        active: article.favorited
      }"
    >
      <i class="ion-heart"></i>
      &nbsp;
      Favorite Post <span class="counter">(29)</span>
    </button>
     <button
      v-if="article.author.username==user.username"
      class="btn btn-sm btn-outline-secondary"
      :class="{
        active: article.author.following
      }"
      style="color:red"
      @click="toDeleteArticle(article.slug)"
    >
      <i class="ion-trash-a"></i>
      &nbsp;
       Delete Article<span class="counter"></span>
    </button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {deleteArticles} from '@/api/article'
export default {
  name: 'ArticleMeta',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  computed:{
    ...mapState(['user'])
  },
  methods:{
    toDeleteArticle(slug){
      deleteArticles(slug).then(res=>{
        this.$router.push('/')
      })
    }
  }
}
</script>

<style>

</style>
