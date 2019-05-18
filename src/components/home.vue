<template>

    <div class="container-content">
        <div class="row">
          <div class="col s12 push-l1 l10" style="outline: 2px solid orange;">
            <div class="main-carousel" v-on:wheel="mouseScroll">
              <div v-for="item in items" v-bind:key="item.id" class="main-carousel__cell">
                <div class="main-carousel__spacer"></div>
                <img :src="getImgURL(item, item['slider-image-src'])" alt="" class="main-carousel__image">
                <!-- {{item.title}} -->
                <!-- <router-link :to="getprojectLink(item)">View Project</router-link> -->
              </div>
            </div>
          </div>
        </div>
    </div>

</template>

<script>
  import projects from './json/projects.json'
  import debounce from 'debounce'

  export default {
    name: "home",
    data() {
      return {
        items: projects,
        slider: {},
      };
    },
    mounted() {
      this.buildSlider();
      console.log(debounce);
    },
    methods: {
      getImgURL(item, img) {
        return require(`../images/projects/${item.path}/${img}`);
      },
      getprojectLink(item) {
        return `/project/${item.path}`;
      },
      buildSlider() {
        this.slider = new this.$tns({
          container: '.main-carousel',
          items: 1,
          slideBy: 'page',
          autoplay: false,
          axis: 'vertical',
          gutter: 0,
          center: true,
          controls: false,
          arrowKeys: true,
          speed: 1000,
          autoplayHoverPause: true,
          touch: true,
          mouseDrag: false,
          nav: false
        });
      },
      mouseScroll: debounce(function(e){
        if (e.deltaY < 0) {
          this.slider.goTo('prev');
        } else {
          this.slider.goTo('next');
        }
      } ,300)
    }
  };
</script>