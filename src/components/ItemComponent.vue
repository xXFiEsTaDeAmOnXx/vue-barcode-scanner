<template>
    <h1>{{ this.title }} {{ this.msg }}</h1>
</template>
  
<script>

export default {
    name: 'itemComponent',
    data() {

        return {

        }
    },
    props: {
        msg: {
            type: String,
            default: null
        },
        title: {
            type: String,
            default: null

        },

    },
    mounted() {
    },
    methods: {



    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    background-color: rgba(72, 206, 197, 0.319);
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24pt;
    color: rgb(93, 93, 93);
}
</style>