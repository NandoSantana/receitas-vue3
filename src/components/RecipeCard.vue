<template>
  <div class="bg-white rounded-2xl shadow-md overflow-hidden">
    <img :src="recipe.image_path" alt="Recipe Image" class="w-full h-48 object-cover">
    <div class="p-4">
      <h2 class="text-xl font-bold mb-1">{{ recipe.title }}</h2>
      <p class="text-sm text-gray-600">{{ recipe.category.name }}</p>
      <button
        @click="goToDetails(recipe.id)"
        class="mt-2 inline-block text-blue-600 hover:underline"
      >
        Ver receita
      </button>
    </div>
  </div>
</template>

<script setup>

import { useRouter } from 'vue-router';
defineProps({ recipe: Object });
const router = useRouter();
const goToDetails = (id) => {
  router.push(`/recipes-details/${id}`);
};
</script>
