<template>
  <div data-cy="recipe-detail" class="container mx-auto p-6 max-w-3xl">
    <router-link to="/" data-cy="back-button" class="text-blue-600 hover:rounded mb-4 block btn_voltar">←</router-link>
    <br />
    <img :src="recipe.image_path" alt="Imagem da receita" class="w-full h-64 object-cover rounded-xl mb-6" />
    <h1 class="text-3xl font-bold mb-2">{{ recipe.title }}</h1>
    <p class="text-sm text-gray-500 mb-4">Categoria: {{ recipe.category.name }}</p>
    <p class="text-gray-500 leading-relaxed whitespace-pre-line">{{ recipe.description }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

const route = useRoute();
const recipe = ref({ category: {} });

const fetchRecipe = async () => {
  const res = await axios.get(`http://localhost:8000/api/recipes/${route.params.id}`);
  recipe.value = res.data;
  console.log('recipeDetail', recipe.value);
};

onMounted(fetchRecipe);
</script>
<style scoped>
.btn_voltar{
    background: white;
}
</style>