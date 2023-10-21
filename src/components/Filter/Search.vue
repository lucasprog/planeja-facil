<script setup lang="ts">
  import { ref } from 'vue'

  import { useBillsStore } from '../../stores/useBillsStore';

  const billsStore = useBillsStore();

  const vsearch = ref(null);

  const goSearch = () => {
    billsStore.setSearch(vsearch.value);
  }
</script>

<template>
  <div class="c-filter-search">
    <form class="c-filter-search__form">
      <input placeholder="Procure sua conta" class="c-filter-search__input" type="search" name="search" v-model="vsearch" @keyup="goSearch()">
    </form>
  </div>
</template>

<style scoped lang="scss">

  .c-filter-search{
    @apply w-full;

    &__form{
      @apply bg-white border-none overflow-hidden flex justify-between items-center rounded-full;
    }

    &__input{
      @apply h-full w-full p-4 outline-none focus-visible:outline-none focus:outline-none focus-visible:shadow-none focus-visible:border-none;
    }

    &__button{
      @apply bg-blue-800 text-white p-4 flex items-center justify-center;
    }

    &__input,
    &__button{
      @apply h-12;
    }
  }
</style>
