<template>
    <h1>{{ this.title }}</h1>

</template>
  
<script>

export default {
    name: 'itemComponent',
    data() {
        
        return {

        }
    },
    props:{
        title: {
        type: String,
        default: null
        }
    },
    mounted(){      
    },
    methods: {

       
        
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style 
scoped>



</style>