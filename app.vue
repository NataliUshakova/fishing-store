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
        </ul>
      </nav>
    </header>

    <main class="flex-grow container mx-auto px-4 py-8">
      <NuxtPage />
    </main>

    <footer class="bg-blue-600 text-white py-4">
      <div class="container mx-auto px-4 text-center">
        &copy; {{ new Date().getFullYear() }} Рибальський магазин. Усі права захищені.
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Тут можна додати будь-яку додаткову логіку, якщо потрібно
</script>

<style>
/* Глобальні стилі можна додати тут */
body {
  font-family: Arial, sans-serif;
}
</style>