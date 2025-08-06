<template>
  <div class="container mx-auto p-6 grid md:grid-cols-4 gap-6">
    <!-- Sidebar -->
    <aside class="md:col-span-1">
      <h2 class="text-lg font-semibold mb-2">Categorias</h2>
      <ul>
        <li
          v-for="category in categories"
          :key="category.id"
          data-cy='category'
          class="cursor-pointer mb-1 text-withe-600 hover:underline"
          @click="filterByCategory(category.id)"
        >
          {{ category.name }}
        </li>
        <li
          class="cursor-pointer text-gray-600 mt-2 hover:underline"
          @click="filterByCategory(null)"
        >
          Todas as categorias
        </li>
      </ul>
    </aside>

    <!-- Recipes Grid -->
    <section class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <RecipeCard v-for="recipe in recipes" :key="recipe.id" :recipe="recipe" />
    </section>

    <!-- Pagination -->
    <div class="md:col-span-4 text-center mt-6">
      <button
        @click="loadPage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-gray-300 rounded mx-1"
      >
        Anterior
      </button>
      <button
        v-for="page in totalPages"
        :key="page"
        @click="loadPage(page)"
        :class="[
          'px-4 py-2 rounded mx-1',
          currentPage === page ? 'bg-blue-500 text-white' : 'bg-gray-200'
        ]"
      >
        {{ page }}
      </button>
      <button
        @click="loadPage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-gray-300 rounded mx-1"
      >
        Próxima
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import RecipeCard from '../components/RecipeCard.vue';

const recipes = ref([]);
const categories = ref([]);
const currentPage = ref(1);
const totalPages = ref(1);
const selectedCategory = ref(null);

const fetchCategories = async () => {
  const res = await axios.get('http://localhost:8000/api/categories');
  categories.value = res.data;
};

const fetchRecipes = async (page = 1) => {
  const res = await axios.get('http://localhost:8000/api/recipes', {
    params: {
      page,
      category_id: selectedCategory.value,
    },
  });

  recipes.value = res.data.data;
  currentPage.value = res.data.current_page;
  totalPages.value = res.data.last_page;
};

const loadPage = (page) => {
  if (page >= 1 && page <= totalPages.value) {
    fetchRecipes(page);
  }
};

const filterByCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  fetchRecipes(1);
};

onMounted(() => {
  fetchCategories();
  fetchRecipes();
});
</script>
