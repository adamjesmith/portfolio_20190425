<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <p>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/contact">Contact</router-link>
    </p>
    <transition
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated zoomOut"
      >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to your prerender-spa-plugin Vuejs 2.0 demo app!'
    }
  }
}
</script>

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>

<style src="./styles/main.scss"></style>
