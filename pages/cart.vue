<template>
    <div>
        <h1 class="text-3xl font-bold mb-6">Кошик</h1>
        <div v-if="cartItems.length === 0" class="text-center text-gray-600">
            Ваш кошик порожній
        </div>
        <div v-else>
            <div v-for="item in cartItems" :key="item.id" class="flex items-center justify-between border-b py-4">
                <div class="flex items-center">
                    <img :src="item.image" :alt="item.name" class="w-16 h-16 object-cover mr-4">
                    <div>
                        <h2 class="text-lg font-semibold">{{ item.name }}</h2>
                        <p class="text-gray-600">{{ item.price }} грн x {{ item.quantity }}</p>
                    </div>
                </div>
                <div class="flex items-center">
                    <button @click="decreaseQuantity(item)" class="bg-gray-200 px-2 py-1 rounded-l">-</button>
                    <span class="bg-gray-100 px-4 py-1">{{ item.quantity }}</span>
                    <button @click="increaseQuantity(item)" class="bg-gray-200 px-2 py-1 rounded-r">+</button>
                    <button @click="removeFromCart(item)" class="ml-4 text-red-600 hover:text-red-800">Видалити</button>
                </div>
            </div>
            <div class="mt-6 text-right">
                <p class="text-xl font-bold">Загальна сума: {{ totalPrice }} грн</p>
                <button @click="checkout" class="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
                    Оформити замовлення
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCartStore } from '~/stores/cart'

const cartStore = useCartStore()

const cartItems = computed(() => cartStore.cartItems)
const totalPrice = computed(() => cartStore.totalPrice)

const decreaseQuantity = (item) => cartStore.decreaseQuantity(item)
const increaseQuantity = (item) => cartStore.increaseQuantity(item)
const removeFromCart = (item) => cartStore.removeFromCart(item)

const checkout = () => {
    alert('Замовлення оформлено!')
    cartStore.clearCart()
}
</script>