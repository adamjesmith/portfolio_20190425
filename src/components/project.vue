<template>
  <div class="hello">
    <h1>Project with id {{projectName}}</h1>
    
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
