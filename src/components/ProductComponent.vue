<template>
    <div class="container" id="productCom">
        <table style="width: 100%;">
            <colgroup>
                <col span="1" style="width: 30%;">
                <col span="1" style="width: 70%;">
            </colgroup>

            <!-- Put <thead>, <tbody>, and <tr>'s here! -->
            <tbody>
                <tr>
                    <td><img id="scanImg"></td>
                    <td><p>{{ desc }}</p></td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>

export default {
    name: 'productComponent',
    data() {
        return { desc: "" }
    },
    props: {
        product: {
            type: Object,
            default: null
        },

    },
    updated() {
        if (this.product != {}) {
            document.getElementById("scanImg").src = this.product.pictureLoc
            this.desc = this.product.name
            console.log("ProductComponent: " + JSON.stringify(this.product))
            document.getElementById("productCom").style = "opacity: 1;"
        }
    },
    methods: {
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
    opacity: 0;
}
</style>