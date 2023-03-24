<template>
    <div v-if="this.shown" class="container">
        <table style="width: 100%;">
            <colgroup>
                <col span="1" style="width: 30%;">
                <col span="1" style="width: 70%;">
            </colgroup>

            <!-- Put <thead>, <tbody>, and <tr>'s here! -->
            <tbody>
                <tr>
                    <td><img :src="imageSrc" alt="picture of Product"></td>
                    <td>
                        <p>{{ desc }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>

export default {
    name: 'productComponent',
    data() {
        return { imageSrc: "", desc: "", shown: false }
    },
    props: {
        product: {
            type: Object,
            default: null
        },

    },
    mounted() {
        this.refreshView()
    },
    updated() {
        this.refreshView()
    }, methods: {
        refreshView() {
            if (this.product.pictureLoc != undefined && this.product.name != undefined && this.product != null) {
                this.imageSrc = 'https://vue-barcode-scanner-backend.azurewebsites.net' + this.product.pictureLoc
                this.desc = this.product.name
                this.shown = true
                //console.log("ProductComponent: " + this.desc)
            }
        }
    }
}
</script>
<style scoped>
img {
    width: auto !important;
    /*override the width below*/
    width: 100%;
    max-width: 140px;
    max-height: 140px;
    float: left;
    clear: both;
}

.container {
    border: 1px solid black;
}
</style>