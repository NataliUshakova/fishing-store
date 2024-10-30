<template>
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover">
        <div class="p-4">
            <h2 class="text-xl font-semibold mb-2">{{ product.name }}</h2>
            <p class="text-gray-600 mb-4">{{ product.description }}</p>
            <div class="flex justify-between items-center">
                <span class="text-lg font-bold">{{ product.price }} грн</span>
                <button @click="addToCart" class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Додати в кошик
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart'

const props = defineProps({
    product: {
        type: Object,
        required: true
    }
})

const cartStore = useCartStore()

const addToCart = () => {
    cartStore.addToCart(props.product)
}
</script>