<template>
    <div class="page">
        <div class="container">

            <div class="main-carousel">
              <div v-for="item in items" v-bind:key="item.id" class="carousel-cell">
                <img :src="getImgURL(item, item['slider-image-src'])" alt="">
                <h3>{{item.title}}</h3>
                <router-link :to="getprojectLink(item)">View Project</router-link>
              </div>
            </div>

        </div>
    </div>
</template>

<script>
  import projects from './json/projects.json'

  export default {
    name: "home",
    data() {
      return {
        items: projects,
      };
    },
    // lifecycle hooks
    beforeCreate() {

    },
    created() {

    },
    beforeMount() {

    },
    mounted() {
      this.isImageLoaded();
    },
    methods: {
      getImgURL(item, img) {
        return require(`../images/projects/${item.path}/${img}`);
      },
      getprojectLink(item) {
        return `/project/${item.path}`;
      },
      buildSlider() {
        const slider = new this.$flickity( '.main-carousel', {

        });
      },
      isImageLoaded() {
        let image = document.querySelectorAll('.carousel-cell img')[0];
        let callback = this.isImageLoaded;
        if (image.offsetHeight < 1) { 
          setTimeout(function() {
            callback();
          }, 100); 
        } else {
          this.buildSlider();
        }
      }
    }
  };
</script>