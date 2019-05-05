<template>
  <div id="app">
    <header>
      <router-link to="/">adam</router-link>
      <nav>
        <router-link to="/about">about 2</router-link>
        <router-link to="/contact">contact</router-link>
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

<style>
  @import "https://cdn.jsdelivr.net/npm/animate.css@3.5.1";
</style>

<style src="./styles/main.scss"></style>
