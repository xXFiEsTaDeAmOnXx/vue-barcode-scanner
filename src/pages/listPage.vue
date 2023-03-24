<template>
    <headerComponent :title="this.title"></headerComponent>
    <productComponent v-for="productInfo in products" :product="productInfo"></productComponent>
</template>
  
<script>
import { useCodeStore } from "@/stores/codes";
import productComponent from '../components/ProductComponent.vue';
import headerComponent from '../components/HeaderComponent.vue';


export default {
    name: 'homePage',
    components: { headerComponent, productComponent },
    data() {
        return {
            products: [],
            store: null,
            title: "Scanned Products - History"
        }
    },
    mounted() {
        // Store-Referenz erstellen
        this.store = useCodeStore()
    },
    methods: {
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style 
scoped>
h2 {
    color: green;
    font-size: 24pt;
    font-family: Helvetica, Arial, sans-serif;
}
</style>

