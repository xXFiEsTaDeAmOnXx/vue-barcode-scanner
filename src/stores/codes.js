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
      if (!this.pastItems.includes(barcode)) {
        this.pastItems.push(barcode)
        LOCALSTORAGE_INSTANCE.writeItems(this.pastItems)
      } else {
        let idx = this.pastItems.indexOf(barcode)
        this.pastItems.splice(idx, 1)
        this.pastItems.splice(0, 0, barcode)
        LOCALSTORAGE_INSTANCE.writeItems(this.pastItems)
      }
    }
  }
})
