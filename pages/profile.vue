<template>
    <div>
        <h1 class="text-3xl font-bold mb-6">Профіль користувача</h1>
        <p>Ім'я: {{ user?.name }}</p>
        <p>Email: {{ user?.email }}</p>
    </div>
</template>

<script setup lang="ts">
import { useAuthStore } from '~/stores/auth'
import { storeToRefs } from 'pinia'

definePageMeta({
    middleware: 'auth'
})

const authStore = useAuthStore()
const { user } = storeToRefs(authStore)
</script>