<template>
  
  <div class="home__container">
    
    <div class="container main-carousel">
      <div class="container-content main-carousel__bg">
          <h2 class="main-carousel__title" js-slider="title"></h2>  
          <div class="main-carousel__container">
            <div class="main-carousel__carousel" v-on:wheel="mouseScroll">
              <div v-for="item in items" v-bind:key="item.id" class="main-carousel__cell" :data-project="item.title">
                <div class="main-carousel__spacer"></div>
                <img
                  :src="getProjectURL(item, item['slider-image-src'])"
                  :alt="item.title"
                  class="main-carousel__image"
                >
                <!-- <router-link :to="getprojectLink(item)">View Project</router-link> -->
              </div>
            </div>
          </div>
      </div>
    </div>

    <footer class="home__footer">
      <div class="container home__footer-container">
        <p class="home__footer-profession">font end developer</p>
        <ul class="home__footer-social">
          <li class="home__footer-social-link"><a href="#">instagram</a></li>
          <li class="home__footer-social-link"><a href="#">dribble</a></li>
          <li class="home__footer-social-link"><a href="#">linkedIn</a></li>
        </ul>
      </div>
    </footer>

  </div>

</template>

<script>
import projects from "./json/projects.json";
import debounce from "debounce";

export default {
  name: "home",
  data() {
    return {
      items: projects,
      slider: {},
      title: {}
    };
  },
  mounted() {
    this.buildSlider();
    this.title = document.querySelector('[js-slider="title"]');
  },
  methods: {
    getProjectURL(item, img) {
      return require(`../images/projects/${item.path}/${img}`);
    },
    getprojectLink(item) {
      return `/project/${item.path}`;
    },
    buildSlider() {
      const self = this;
      this.slider = new this.$tns({
        container: ".main-carousel__carousel",
        items: 1,
        slideBy: "page",
        autoplay: true,
        axis: "vertical",
        gutter: 0,
        center: true,
        controls: false,
        arrowKeys: true,
        speed: 1500,
        autoplayHoverPause: true,
        touch: true,
        mouseDrag: true,
        nav: false,
        onInit: function() {
          self.sliderEvents();
        }
      });
    },
    sliderEvents() {
      let self = this;
      this.slider.events.on("transitionStart", function() {
        console.log("transitionStart");
        self.clearTitle();
      });
      this.slider.events.on("transitionEnd", function() {
        console.log("transitionEnd");
        self.populateTitle();
      });
    },
    clearTitle() {
      this.title.innerHTML = '';
    },
    populateTitle() {
      if (this.title.innerHTML === '') {
        let active = document.querySelector('.tns-slide-active');
        let words = active.dataset.project.split(" ");
        this.title.innerHTML = this.wrapTitle(words);
      }
    },
    wrapTitle(words) {
      let str ='';
      words.forEach( (word, index) => {
        str += `<span class="animated fadeInUp">${word}</span>`
      });
      return str;
    },
    mouseScroll: debounce(function(e) {
      if (e.deltaY < 0) {
        this.slider.goTo("prev");
      } else {
        this.slider.goTo("next");
      }
    }, 300)
  }
};
</script>