<template>
    <h1>Hello</h1>
    <p>{{result}}</p>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    name: 'homePage',
    components: { StreamBarcodeReader },
    data() {
        return {
                result: ""
        }
    },
    methods: {
        onDecode(result) { this.result = result },
        onLoaded(result) { console.log(result) }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>