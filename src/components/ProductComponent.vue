<template>
    <table>
        <tr>
            <td><img id="scanImg"></td>
            <td>
                <p>{{ desc }}</p>
            </td>
        </tr>
    </table>
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
    mounted() {
        if (this.product != {}) {
            document.getElementById("scanImg").src = this.product.pictureLoc
            this.desc = this.product.name
            console.log("ProductComponent: " + JSON.stringify(this.product))
        }

    },
    methods: {
    }
}
</script>
<style scoped></style>