import { defineStore } from 'pinia'
import axios from 'axios'
import { LOCALSTORAGE_INSTANCE } from '@/services/localstorage.service.js'

export const useCodeStore = defineStore('codes', {
    state: () => ({
        productCatalog: [],
        pastItems: LOCALSTORAGE_INSTANCE.readItems()
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