<template>
  <div class="hello">
    <h1>Project with id {{projectName}}</h1>
    <!-- <img src="./images/project/{{projectName}}/test.jpg"> -->
    <!-- <img v-attr="src: ./images/project/"+{{projectName}}+"/test.jpg"> -->
    
  </div>
</template>

<script>    
export default {
  data: function() {
    return {
      //id is name of the dynamic segment we created in router
      projectName: this.$route.params.id
    };
  }
};
</script>
