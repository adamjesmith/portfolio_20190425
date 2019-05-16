<template>
    <div class="page">
        <div class="container">

          <div class="test"></div>

            <div class="main-carousel">
              <div v-for="item in items" v-bind:key="item.id" class="carousel-cell">
                <img :src="getImgURL(item, item['slider-image-src'])" alt="">
                <!-- {{item.title}} -->
                <!-- <router-link :to="getprojectLink(item)">View Project</router-link> -->
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
    mounted() {
      this.isImageLoaded();
      //https://github.com/ganlanyuan/tiny-slider
      //https://vanillalist.top/
    },
    methods: {
      getImgURL(item, img) {
        console.log(`../images/projects/${item.path}/${img}`);
        return require(`../images/projects/${item.path}/${img}`);
      },
      getprojectLink(item) {
        return `/project/${item.path}`;
      },
      buildSlider() {
        console.log(this.$tns);
        // const slider = new this.$flickity( '.main-carousel', {
        //   prevNextButtons: false,
        //   wrapAround: false,
        //   selectedAttraction: 0.01,
        //   friction: 0.15,
        //   contain: false,
        //   pageDots: false,
        //   on: {
        //     ready: function() {
        //       console.log('Flickity ready');
        //     }
        //   }
        // });
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