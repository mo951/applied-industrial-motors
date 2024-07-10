require('./bootstrap');

import Vue from 'vue'
import vuetify from './plugins/vuetify.js' // path to vuetify export
import VueRouter from 'vue-router';
import CKEditor from '@ckeditor/ckeditor5-vue2';
import { store } from './store'
import router from './routes'
window.Vue = require('vue').default;
import loginservice from "@services/auth/login";

Vue.use(VueRouter);
Vue.use(CKEditor);

// import adminbar from "@/components/sidebars/admin.vue";
import newbar from "@/components/sidebars/newbar.vue";
import notifications from "@/components/sidebars/notifications.vue";
import headercomponent from "@/components/sidebars/headercomponent.vue";
import MainLayout from "@/views/MainLayout.vue";

router.beforeEach(async (to, from, next) => {

  if(to.meta.guest){
    //for guests and payments
    next()
  }
  else{
    var isAuthenticated = localStorage.getItem('auth_token')?true:false;
    if (to.name !== 'auth.login' && !isAuthenticated) next({ name: 'auth.login' })
    if (to.name === 'auth.login' && isAuthenticated) next({ name: 'auth.panel' })
    else next()
  }
})

new Vue({
  router,
  vuetify,
  store,
  async created(){
    var token = localStorage.getItem('auth_token')?localStorage.getItem('auth_token'):'';
    if(token){
      this.$store.commit('setAuthToken',token);
      this.$store.commit('setLoginStatus',true);
      var user = await loginservice.me()
      this.$store.commit('setloggedInUser',user);
      if(user.permissions.length>0){
        let permissions = user.permissions.map((e)=>{
          return e.permission_id
        })
        this.$store.commit('setPermissions',permissions);
      }
    }

  },
  components: {
    newbar,
    headercomponent,
    notifications,
    MainLayout
  },
  data(){
    return {
    }
  },
  computed:{
    sideBarStatus() {
      return this.$store.getters.sideBarStatus;
    },
    notificaitontext() {
      return this.$store.getters.notificationText;
    },
    notificaitonstatus() {
      return this.$store.getters.notificationStatus;
    },
    isPanelFull() {
      return this.$store.getters.isPanelFull;
    },
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
  },
  watch:{
    $route(){
      this.$store.commit('setPanelFull',false);
      if(this.$route.meta.showsidebar){
        this.$store.commit('setSideBarStatus',true);
      }else{
        this.$store.commit('setSideBarStatus',false);
      }
    },
  }
}).$mount('#app')
