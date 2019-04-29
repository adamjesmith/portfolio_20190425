<template>
    <div class="page">
        <div class="container">

            <!-- <img src="../assets/logo.png"> -->

            <h2>{{msg}}</h2>

            <ul>
              <li v-for="item in items" v-bind:key="item.id">
                <h3>{{item.title}}</h3>

                <img :src="getImgURL(item, item['slider-image-src'])" alt="">
                <router-link :to="getprojectLink(item)">View Project</router-link>

              </li>
            </ul>
            
            <p>Yet there was bitterness. And bitterness not only invaded us from the world; it welled up also within our own magic circle. For horror at our futility, at our own unreality, and not only at the world’s delirium, had driven me out on to the hill.</p>
            <p>We were always hurrying from one little urgent task to another, but the upshot was insubstantial. Had we, perhaps, misconceived our whole existence? Were we, as it were, living from false premises? And in particular, this partnership of ours, this seemingly so well-based fulcrum for activity in the world, was it after all nothing but a little eddy of complacent and ingrown domesticity, ineffectively whirling on the surface of the great flux, having in itself no depth of being, and no significance? Had we perhaps after all deceived ourselves? Behind those rapt windows did we, like so many others, indeed live only a dream? In a sick world even the hale are sick. And we two, spinning our little life mostly by rote, seldom with clear cognizance, seldom with firm intent, were products of a sick world.</p>
            <p>Yet this life of ours was not all sheer and barren fantasy. Was it not spun from the actual fibres of reality, which we gathered in with all the comings and goings through our door, all our traffic with the suburb and the city and with remoter cities, and with the ends of the earth? And were we not spinning together an authentic expression of our own nature? Did not our life issue daily as more or less firm threads of active living, and mesh itself into the growing web, the intricate, ever-proliferating pattern of mankind?</p>

            <div class="project-data">

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
        msg: "New home page",
        items: projects,
      };
    },
    // lifecycle hooks
    beforeCreate() {
      console.log('Home beforeCreate()')
    },
    created() {
      console.log('Home created()')
    },
    beforeMount() {
      console.log('Home beforeMount()');
    },
    mounted() {
      console.log('Home mounted()');
    },
    methods: {
      getImgURL: (item, img) => {
        return require(`../images/projects/${item.path}/${img}`);
      },
      getprojectLink: (item) => {
        return `/project/${item.path}`;
      },
    }
  };
</script>