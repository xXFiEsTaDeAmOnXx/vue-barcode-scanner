<template>
    <h1>QR & BARCODE SCANNER</h1>
    <p>{{result}}</p>
    <StreamBarcodeReader id = "video" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div id="app">
    <p v-if="showSuccessMessage">Barcode erfolgreich gescannt!</p>
</div>

</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
    name: 'homePage',
    components: { StreamBarcodeReader },
    data() {
        
        return {
            showSuccessMessage: false,
                result: ""
                
        }
    },
    methods: {
       
        onDecode(result) { this.result = result;  showSuccessMessage: true},
        onLoaded(result) { console.log(result) }
        
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

</style>