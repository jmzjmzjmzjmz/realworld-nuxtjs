<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                  <input v-model="article.title" type="text" class="form-control form-control-lg" placeholder="Article Title">
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="article.description" type="text" class="form-control" placeholder="What's this article about?">
              </fieldset>
              <fieldset class="form-group">
                  <textarea v-model="article.body" class="form-control" rows="8" placeholder="Write your article (in markdown)"></textarea>
              </fieldset>
              <fieldset class="form-group">
                  <input v-model="article.tagList" type="text" class="form-control" placeholder="Enter tags"><div class="tag-list"></div>
              </fieldset>
              <button class="btn btn-lg pull-xs-right btn-primary" type="button" @click="toPublish">
                  Publish Article
              </button>
            </fieldset>
          </form>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import {getArticle,createArticles,updateArticles} from "@/api/article"
export default {
  // 在路由匹配组件渲染之前会先执行中间件处理
  middleware: 'authenticated',
  name: 'EditorIndex',
  data(){
    return {
      article:{

      }
    }
  },
  created(){
    if(this.$route.params._slug){
      //获取文章详情
      getArticle(this.$route.params._slug).then(res=>{
        this.article = res.data.article
      })
    }
  },
  methods:{
    toPublish(){
      if(this.article.slug){
    updateArticles(this.article.slug,this.article).then(res=>{
    this.$router.push('/article/'+res.data.article.slug)
})
      }else{
        createArticles(this.article).then(res=>{
        this.$router.push('/article/'+res.data.article.slug)
      })
      }
      
    }
  }
}
</script>

<style>

</style>
