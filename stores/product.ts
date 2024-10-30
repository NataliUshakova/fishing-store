import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      { id: 1, name: 'Вудка Shimano', price: 1500, description: 'Професійна вудка для спінінгової ловлі', image: '/images/rod.jpg' },
      { id: 2, name: 'Котушка Daiwa', price: 2000, description: 'Надійна котушка з плавним ходом', image: '/images/reel.jpg' },
      { id: 3, name: 'Набір приманок', price: 500, description: 'Комплект з 10 різних приманок', image: '/images/lures.jpg' },
    ]
  }),
  getters: {
    getProductById: (state) => (id: number) => {
      return state.products.find(product => product.id === id)
    }
  }
})