<template>
    <div class="min-h-screen flex flex-col bg-gray-100">
        <header class="bg-blue-600 text-white">
            <nav class="container mx-auto px-4 py-4 flex justify-between items-center">
                <NuxtLink to="/" class="text-2xl font-bold">Рибальський магазин</NuxtLink>
                <ul class="flex space-x-4">
                    <li>
                        <NuxtLink to="/" class="hover:text-blue-200">Головна</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products" class="hover:text-blue-200">Товари</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/cart" class="hover:text-blue-200">Кошик</NuxtLink>
                    </li>
                    <template v-if="isAuthenticated">
                        <li>
                            <span class="hover:text-blue-200">{{ user?.name }}</span>
                        </li>
                        <li>
                            <button @click="logout" class="hover:text-blue-200">Вийти</button>
                        </li>
                    </template>
                    <template v-else>
                        <li>
                            <NuxtLink to="/login" class="hover:text-blue-200">Увійти</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/register" class="hover:text-blue-200">Зареєструватися</NuxtLink>
                        </li>
                    </template>
                </ul>
            </nav>
        </header>

        <main class="flex-grow container mx-auto px-4 py-8">
            <slot />
        </main>

        <footer class="bg-blue-600 text-white py-4">
            <div class="container mx-auto px-4 text-center">
                &copy; {{ new Date().getFullYear() }} Рибальський магазин. Усі права захищені.
            </div>
        </footer>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const authStore = useAuthStore()
const { isAuthenticated, user } = storeToRefs(authStore)
const { logout, checkAuth } = authStore

onMounted(() => {
    checkAuth()
})
</script>