<template>
  <div class="profile-page">

    <div class="user-info">
      <div class="container">
        <div class="row">

          <div class="col-xs-12 col-md-10 offset-md-1">
            <img :src="profile.image" class="user-img" />
            <h4>{{username}}</h4>
            <p>
              Cofounder @GoThinkster, lived in Aol's HQ for a few months, kinda looks like Peeta from the Hunger Games
            </p>
            <button disables="profileDisabled" class="btn btn-sm btn-outline-secondary action-btn" :class="{active:profile.following}" @click="onButtonClick">
              <i class="ion-plus-round"></i>
              &nbsp;
              {{isMyself?'Edit Profile Settings':profile.following?'unFollow Eric Simons':'Follow Eric Simons'}}
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="row">

        <div class="col-xs-12 col-md-10 offset-md-1">
          <div class="articles-toggle">
            <ul class="nav nav-pills outline-active">
              <li class="nav-item" @click="articleType='mine'">
                <span class="nav-link" :class="{
                    active: articleType === 'mine'
                  }" >My Articles</span>
              </li>
              <li class="nav-item" @click="articleType='favourite'">
                <span class="nav-link" :class="{
                    active: articleType === 'favourite'
                  }">Favorited Articles</span>
              </li>
            </ul>
          </div>

          <div
            class="article-preview"
            v-for="article in articles"
            :key="article.slug"
          >
            <div class="article-meta">
              <nuxt-link :to="{
                path: 'profile',
                params: {
                  username: article.author.username
                }
              }">
                <img :src="article.author.image" />
              </nuxt-link>
              <div class="info">
                <nuxt-link class="author" :to="{
                  path: 'profile',
                  params: {
                    username: article.author.username
                  }
                }">
                  {{ article.author.username }}
                </nuxt-link>
                <span class="date">{{ article.createdAt | date('MMM DD, YYYY') }}</span>
              </div>
              <button
                class="btn btn-outline-primary btn-sm pull-xs-right"
                :class="{
                  active: article.favorited
                }"
                @click="onFavorite(article)"
                :disabled="article.favoriteDisabled"
              >
                <i class="ion-heart"></i> {{ article.favoritesCount }}
              </button>
            </div>
            <nuxt-link
              class="preview-link"
              :to="{
                path: 'article',
                params: {
                  slug: article.slug
                }
              }"
            >
              <h1>{{ article.title }}</h1>
              <p>{{ article.description }}</p>
              <span>Read more...</span>
            </nuxt-link>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import {getArticles,deleteFavorite,addFavorite,getProfiles,followUser,unFollowUser} from '@/api/article'


export default {
  middleware: 'authenticated',
  name: 'UserProfile',
  data(){
    return {
      favoriteArticles:[],
      myArticles:[],
      articleType:'mine',
      profile:{},
      profileDisabled:false
    }
  },
  created(){
    this.username = this.$route.params.username 
    getProfiles(this.username).then(res=>{
      this.profile = res.data.profile
    })
    getArticles({author:this.username}).then(res=>{
      this.myArticles = res.data.articles
    })
     getArticles({Favorited:this.username}).then(res=>{
      this.favoriteArticles = res.data.articles
    })
  },
  computed:{
    ...mapState(['user']),
    isMyself(){
      return this.$route.params.username == this.user.username
    },
    articles(){
      return this.articleType=='mine'?this.myArticles:this.favoriteArticles
    }
  },
  methods:{
    onButtonClick(){
      if(this.isMyself){
        this.$router.push('/settings')
      }else{
        this.profileDisabled = true
        if(this.profile.following){
          unFollowUser(this.username).then(res=>{
            this.$set(this.profile,'following',false)
            this.profileDisabled = false
          })
        }else{
  followUser(this.username).then(res=>{
            this.$set(this.profile,'following',true)
             this.profileDisabled = false
          })
        }
       
      }
    },
     async onFavorite (article) {
      article.favoriteDisabled = true
      if (article.favorited) {
        // 取消点赞
        await deleteFavorite(article.slug)
        article.favorited = false
        article.favoritesCount += -1
      } else {
        // 添加点赞
        await addFavorite(article.slug)
        article.favorited = true
        article.favoritesCount += 1
      }
      article.favoriteDisabled = false
    }
  }
}
</script>

<style>

</style>
