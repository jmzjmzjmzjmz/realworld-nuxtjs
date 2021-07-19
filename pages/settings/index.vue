<template>
  <div class="settings-page">
    <div class="container page">
      <div class="row">

        <div class="col-md-6 offset-md-3 col-xs-12">
          <h1 class="text-xs-center">Your Settings</h1>

          <form>
            <fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.image" class="form-control" type="text" placeholder="URL of profile picture">
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
                </fieldset>
                <fieldset class="form-group">
                  <textarea v-model="userInfo.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                </fieldset>
                <fieldset class="form-group">
                  <input v-model="userInfo.email" class="form-control form-control-lg" type="text" placeholder="Email">
                </fieldset>
                <fieldset class="form-group">
                  <input  class="form-control form-control-lg" type="password" placeholder="Password">
                </fieldset>
                <button class="btn btn-lg btn-primary pull-xs-right" @click="onSubmit">
                  Update Settings
                </button>
                
            </fieldset>
             <button class="btn btn-lg pull-xs-left" @click="logout">
                  or click here to logout
                </button>
          </form>
        </div>

      </div>
      
    </div>
    
  </div>
</template>

<script>
import {  getCurrentUser,updateCurrentUser} from '@/api/user'
import {mapState} from 'vuex'
// 仅在客户端加载 js-cookie 包
const Cookie = process.client ? require('js-cookie') : undefined
export default {
  middleware: 'authenticated',
  name: 'SettingsIndex',
  data(){
    return {
userInfo:{
}
    }
  },
  computed:{
    ...mapState(['user'])
  },
  created(){
   getCurrentUser().then(res=>{
     this.userInfo = res.data.user
   })
  },
  methods:{
    onSubmit(){
      updateCurrentUser(this.userInfo).then(res=>{
        this.$router.push('/profile/'+this.user.username)
      })
    },
    logout(){
       // TODO: 保存用户的登录状态
        this.$store.commit('setUser', null)

        // 为了防止刷新页面数据丢失，我们需要把数据持久化
        Cookie.set('user', null)
        this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>
