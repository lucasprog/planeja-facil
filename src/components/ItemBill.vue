<script setup>
  import { defineProps, toRefs } from 'vue';

  const props = defineProps(['bill']);

  const { bill } = toRefs(props)
</script>
<template>
  <div class="c-item-bill">
    <h2 class="c-item-bill__name">
      {{ bill.name }}
      <small class="c-item-bill__due-date">
        <strong>Vencimento:</strong>{{ $filters.dateFormat(bill.due_date) }}
      </small>
    </h2>

    <div class="c-item-bill__block-end">
      <span class="c-item-bill__price">{{ $filters.currencyBRL(bill.price) }}</span>
      <div class="c-item-bill__group-buttons">
        <button class="c-item-bill__button c-item-bill__button--edit">Editar</button>
        <button class="c-item-bill__button c-item-bill__button--delete">Excluír</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .c-item-bill{
    @apply flex justify-between items-center gap-4 w-full min-h-[3rem] bg-blue-100 rounded-md pl-4 pt-4 pb-4 pr-2 hover:bg-blue-50 shadow-sm;
  }

  .c-item-bill__price{
    @apply font-semibold;
  }
  .c-item-bill__name{
    @apply flex flex-col;
  }

  .c-item-bill__due-date{
    @apply text-xs;
  }

  .c-item-bill__block-end{
    @apply flex items-center justify-center gap-4;
  }

  .c-item-bill__group-buttons{
    @apply flex items-center justify-center gap-2;
  }

  .c-item-bill__button{
    @apply text-white h-8 text-xs;
  }

  .c-item-bill__button--delete{
    @apply bg-red-600;
  }

  .c-item-bill__button--edit{
    @apply bg-blue-600;
  }
</style>