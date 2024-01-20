<template>
  <div id="app">
    <NavPage />
    <router-view></router-view>
    <FooterPage />
  </div>
</template>

<script>

import NavPage from './components/NavPage.vue';
import FooterPage from './components/FooterPage.vue';

import Vue from 'vue';
export default {
  name: 'App',

  components: {
    NavPage,
    FooterPage,
  },
  created(){
    Vue.prototype.$localStorage = new Vue({
    data: { 
      token: window.localStorage.getItem('token'),
      activeUser: window.localStorage.getItem('activeUser'),
      person_details_user: window.localStorage.getItem('person_details_user') 
    },
    
    watch:{ 
      token(value){ 
        window.localStorage.setItem('token', value)
      },
      activeUser(value){ 
        window.localStorage.setItem('activeUser', value)
      },
      person_details_user(value){ 
        window.localStorage.setItem('person_details_user', value)
      } 
    },
    })
  },
}
</script>

<style>
@import "~vue-wysiwyg/dist/vueWysiwyg.css";
 

</style>