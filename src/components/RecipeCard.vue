<template>
  <div data-cy="recipe-card" class="bg-white rounded shadow-md overflow-hidden">
    <img :src="recipe.image_path" alt="Recipe Image" class="w-full h-48 object-cover">
    <div class="p-4" >
      <h2 class="text-xl font-bold mb-1 text-black">{{ recipe.title }}</h2>
      <p class="text-sm text-black" data-cy="recipe-category">{{ recipe.category.name }}</p>
      <button
        data-cy="view-recipe-btn"
        @click="goToDetails(recipe.id)"
        class="mt-2 inline-block text-withe-600 hover:underline"
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
