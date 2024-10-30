<template>
    <div>
        <h1 class="text-3xl font-bold mb-6">Наші товари</h1>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>

<script setup>
import { useProductStore } from '~/stores/product'

const productStore = useProductStore()
const products = productStore.products
</script>