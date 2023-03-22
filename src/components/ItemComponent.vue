<template>
    <h1>{{ this.title }} {{ this.msg }}</h1>
    <h2 color="green">{{ this.msg }}</h2>

</template>
  
<script>

export default {
    name: 'itemComponent',
    data() {
        
        return {

        }
    },
    props:{
        msg: {
        type: String,
        default: null
        },
        title: {
        type: String,
        default: null
        
        },
     
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