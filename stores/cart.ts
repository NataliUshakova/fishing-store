import { defineStore } from "pinia"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  quantity: number
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[]
  }),
  getters: {
    totalPrice(): number {
      return this.cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  },
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.cartItems.find(item => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        this.cartItems.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(product: CartItem) {
      const index = this.cartItems.findIndex(item => item.id === product.id)
      if (index !== -1) {
        this.cartItems.splice(index, 1)
      }
    },
    increaseQuantity(product: CartItem) {
      const item = this.cartItems.find(item => item.id === product.id)
      if (item) {
        item.quantity++
      }
    },
    decreaseQuantity(product: CartItem) {
      const item = this.cartItems.find(item => item.id === product.id)
      if (item && item.quantity > 1) {
        item.quantity--
      } else {
        this.removeFromCart(product)
      }
    },
    clearCart() {
      this.cartItems = []
    }
  }
})