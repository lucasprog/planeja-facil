<script setup lang="ts">
  import { ref } from 'vue'

  import { useBillsStore } from '../stores/useBillsStore';

  const billsStore = useBillsStore();

  const vsearch = ref(null);

  const goSearch = () => {
    billsStore.setSearch(vsearch.value);
  }
</script>

<template>
  <div class="c-search">
    <form class="c-search__form">
      <input placeholder="Procure sua conta" class="c-search__input" type="search" name="search" v-model="vsearch" @keyup="goSearch()">
    </form>
  </div>
</template>

<style scoped>

  .c-search{
    @apply w-full;
  }
  .c-search .c-search__form{
    @apply bg-white rounded-lg overflow-hidden flex justify-between items-center;
  }
  .c-search .c-search__input{
    @apply h-full w-full p-4 outline-none focus-visible:outline-none focus:outline-none focus-visible:shadow-none focus-visible:border-none;
  }
  .c-search .c-search__button{
    @apply bg-blue-800 text-white p-4 flex items-center justify-center;
  }

  .c-search .c-search__input,
  .c-search .c-search__button{
    @apply h-12;
  }
</style>
