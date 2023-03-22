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
                result: "",
                loaded:false,
        }
    },
    mounted(){
        setTimeout(()=>{
        if(!this.loaded){
        this.$swal({
        title: 'Error!',
        text: 'You need to turn your camara on to use the barcode app.',
        icon: 'error',
        confirmButtonText: 'Okay'}).then(result =>{
            console.log(result)
        })
        }
        },100)
               
    },
    methods: {

        onDecode(result) { this.result = result },
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

</style>