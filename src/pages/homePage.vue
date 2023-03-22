<template>
    <h1>Hello</h1>>
    <StreamBarcodeReader @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    name: 'homePage',
    components: { StreamBarcodeReader },
    data() {
        return {

        }
    },
    methods: {
        onDecode(result) { console.log(result) },
        onLoaded(result) { console.log(result) }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>