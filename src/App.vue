<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <router-link to="/">Home</router-link>
      <nav>
        <router-link to="/about">About</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </header>

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

<style src="./styles/main.scss"></style>
