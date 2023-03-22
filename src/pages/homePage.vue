<template>
    <h1>QR & BARCODE SCANNER</h1>
    <p>{{result}}</p>
    <StreamBarcodeReader id = "video" @decode="onDecode" @loaded="onLoaded"></StreamBarcodeReader>
    <div id="app">
    <p v-if="showSuccessMessage">Barcode erfolgreich gescannt!</p>
</div>
    <itemComponent title="test"></itemComponent>
</template>
  
<script>
import { StreamBarcodeReader } from "vue-barcode-reader";
import itemComponent from '../components/ItemComponent.vue'


export default {
    name: 'homePage',
    components: { StreamBarcodeReader, itemComponent },
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
        },5000)
               
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