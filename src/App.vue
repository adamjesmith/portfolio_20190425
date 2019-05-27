<template>
  <div id="app">
    
    
    <header class="header">
      <div class="container">
        <div class="navigation__container">
          <router-link to="/" class="header__title">thedigitalsmith</router-link>
          <nav class="navigation">
            <router-link to="/about" class="navigation__link navigation__link--rotate">about</router-link>
            <!-- <router-link to="/contact">Contact</router-link> -->
          </nav>
        </div>
      </div>
    </header>
      

    <!-- <transition
        name="fade"
        enter-active-class="animated fadeInUp"
        leave-active-class="animated zoomOut"
      > -->
      <keep-alive include="home">
        <router-view></router-view>
      </keep-alive>
    <!-- </transition> -->
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
