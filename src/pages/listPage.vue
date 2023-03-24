<template>
    <headerComponent :title="this.title"></headerComponent>
    <productComponent v-for="productInfo in products" :product="productInfo">
        <p>{{ productInfo }}</p>
    </productComponent>
</template>
  
<script>
import { useCodeStore } from "@/stores/codes";
import axios from 'axios'
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
        this.productBarcodes = this.store.pastItems
        console.log(this.productBarcodes)

        for (let idx=0; idx <this.productBarcodes.length; idx++) {
            this.getProductInfo(this.productBarcodes[idx])
        }

        console.log(this.products)
        this.$forceUpdate()

    },
    methods: {
        getProductInfo(barcode) {
            axios
                .get('https://vue-barcode-scanner-backend.azurewebsites.net' + '/api/item/' + barcode)
                .then((response) => {
                    let idx = this.productBarcodes.indexOf(response.data.barcode)
                    this.products.splice(idx, 0, response.data)
                    this.$forceUpdate()
                })
                .catch((error) => console.log(error))
        }
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

