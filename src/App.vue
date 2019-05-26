<template>
  <div id="app">
    
    <div class="container">
      <div class="row">
        <header class="header">
          <router-link to="/" class="header__title">thedigitalsmith</router-link>
          <nav class="navigation">
            <div class="navigation__links">
              <router-link to="/about" class="navigation__link">about</router-link>
            </div>
            <!-- <router-link to="/contact">Contact</router-link> -->
          </nav>
        </header>
      </div>
    </div>

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
