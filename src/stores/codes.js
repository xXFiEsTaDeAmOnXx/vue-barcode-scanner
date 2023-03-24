import { defineStore } from 'pinia'

export const useCodeStore = defineStore('codes', {
    state: () => ({
        productCatalog: [
            { name: "Krumbach Wasserflasche", pictureLoc: "src/assets/krumbach.jpg", barcode: 4009228120053 },
            { name: "Aqua Wasserflasche", pictureLoc: "src/assets/aqua.jpg", barcode: 4001428065417 },
            { name: "Kreidebox", pictureLoc: "src/assets/krumbach.jpg", barcode: 12134 },
            //{name: 50, pictureLoc: "src/assets/krumbach.jpg", barcode: 4009228120053},
            //{name: 50, pictureLoc: "src/assets/krumbach.jpg", barcode: 4009228120053},
        ]
    }),
    getters: {
        getProdInfo:(state) =>  state.productCatalog
    
    },
    actions: {}
})