<template>
    <h1>QR & BARCODE SCANNER</h1>
    <StreamBarcodeReader id="video" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div id="app">
        <p v-if="showSuccessMessage">Barcode erfolgreich gescannt!</p>
        <itemComponent v-if="showSuccessMessage" msg="RECOGNIZED" :title="result"></itemComponent>
        <productComponent :product="this.productInfo"></productComponent>
        <img id="scanImg">
        <p>{{ desc }}</p>
    </div>
</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { useCodeStore } from "@/stores/codes";
import itemComponent from '../components/ItemComponent.vue';
import productComponent from '../components/ProductComponent.vue';


export default {
    name: 'homePage',
    components: { StreamBarcodeReader, itemComponent, productComponent },
    data() {

        return {
            showSuccessMessage: false,
            result: "",
            loaded: false,
            productInfo: {},
            store: null
        }
    },
    mounted() {
        // Store-Referenz erstellen
        this.store = useCodeStore()

        setTimeout(() => {
            if (!this.loaded) {
                this.$swal({
                    title: 'Error!',
                    text: 'You need to turn your camara on to use the barcode app.',
                    icon: 'error',
                    confirmButtonText: 'Okay'
                }).then(result => {
                    console.log(result)
                })
            }
        }, 5000)

    },
    methods: {
        onDecode(result) {
            this.result = result
            const array = this.store.getProdInfo;
            this.productInfo = array.filter(product => result == product.barcode)
            this.desc = this.productInfo.name
            this.showSuccessMessage = true
        },
        onLoaded() {
            console.log("Finisehd loading")
            this.loaded = true;
        }

    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style 
scoped>
h1 {
    background-color: rgba(72, 206, 197, 0.319);
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24pt;
    color: rgb(93, 93, 93);
}



#video {

    width: fit-content;


}

h2 {
    color: green;
    font-size: 24pt;
    font-family: Helvetica, Arial, sans-serif;
}
</style>

