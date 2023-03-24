import { defineStore } from 'pinia'
import axios from 'axios'

export const useCodeStore = defineStore('codes', {
    state: () => ({
        productCatalog: [],
        pastItems: []
    }),

    getters: {
        getProdInfo: (state) => state.productCatalog

    },
    actions: {
        async fetchItems() {
            axios
                .get('https://vue-barcode-scanner-backend.azurewebsites.net' + '/api/items')
                .then((response) => {
                    this.productCatalog = JSON.parse(response.data)
                })
                .catch((error) => console.log(error))
        },
        updateItems(barcode) {
            this.pastItems.push(barcode)

        }
    }
})