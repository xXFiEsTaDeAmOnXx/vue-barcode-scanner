<template>
    <headerComponent :title="this.title"></headerComponent>
    <StreamBarcodeReader id="video" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div id="app">
        <p v-if="showSuccessMessage">Barcode erfolgreich gescannt!</p>
        <itemComponent v-if="showSuccessMessage" msg="RECOGNIZED" :title="result"></itemComponent>
        <productComponent :product="this.productInfo"></productComponent>
    </div>
</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import { useCodeStore } from "@/stores/codes";
import itemComponent from '../components/ItemComponent.vue';
import productComponent from '../components/ProductComponent.vue';
import headerComponent from '../components/HeaderComponent.vue';
import { LOCALSTORAGE_INSTANCE } from '@/services/localstorage.service.js'


export default {
    name: 'homePage',
    components: { headerComponent, StreamBarcodeReader, itemComponent, productComponent },
    data() {

        return {
            showSuccessMessage: false,
            result: "",
            loaded: false,
            productInfo: {},
            store: null,
            title: "QR & BARCODE SCANNER"
        }
    },
    mounted() {
        // Store-Referenz erstellen
        this.store = useCodeStore()

        this.store.fetchItems()


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
            this.productInfo = array.filter(product => result == product.barcode)[0]
            this.store.updateItems(this.productInfo.barcode)
            this.showSuccessMessage = true
            LOCALSTORAGE_INSTANCE.writeItems(this.store.pastItems)
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
#video {
    width: fit-content;
    z-index: -1;
}

h2 {
    color: green;
    font-size: 24pt;
    font-family: Helvetica, Arial, sans-serif;
}
</style>