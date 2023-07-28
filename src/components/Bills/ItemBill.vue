<script setup lang="ts">
  import { PropType, toRefs } from 'vue';

  import { InvoiceInterface } from '../../models/invoice'

  import { dateFormat } from '../../composables/helpers'

  const props = defineProps({
    bill: {
      type: Object as PropType<InvoiceInterface>,
      required: true
    }
  });

  const emit = defineEmits(['onEdit','onDelete']);

  const { bill } = toRefs(props);

  const eEdit = () => {emit('onEdit',bill)}

  const eDelete = () => {emit('onDelete',bill)}

</script>
<template>
  <div class="c-item-bill">
    <h2 class="c-item-bill__name">
      {{ bill.name }}
      <small class="c-item-bill__due-date">
        <strong>Vencimento:</strong>{{ dateFormat(bill.due_date) }}
      </small>
    </h2>

    <div class="c-item-bill__block-end">
      <span class="c-item-bill__totalValue">{{ parseFloat(bill.totalValue).toLocaleString('pt-br',{style: 'currency', currency: 'BRL', minimumFractionDigits: 2}) }}</span>
      <div class="c-item-bill__group-buttons">
        <button @click="eEdit" class="c-item-bill__button c-item-bill__button--edit">Editar</button>
        <button @click="eDelete" class="c-item-bill__button c-item-bill__button--delete">Excluír</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .c-item-bill{
    @apply flex justify-between items-center gap-4 w-full min-h-[3rem] bg-gray-600 rounded-lg pl-4 pt-4 pb-4 pr-2 hover:bg-gray-500 shadow-sm;
  }

  .c-item-bill__totalValue{
    @apply font-semibold text-sm text-white bg-green-600 pl-4 pr-4 pt-1 pb-1 rounded-full;
  }
  .c-item-bill__name{
    @apply flex flex-col text-gray-300;
  }

  .c-item-bill__due-date{
    @apply text-xs text-gray-900;
  }

  .c-item-bill__block-end{
    @apply flex items-center justify-center gap-4;
  }

  .c-item-bill__group-buttons{
    @apply flex items-center justify-center gap-2;
  }

  .c-item-bill__button{
    @apply text-white h-8 text-xs rounded-full shadow-none text-xs pl-4 pr-4 pt-1 pb-1;
  }

  .c-item-bill__button--delete{
    @apply bg-red-600;
  }

  .c-item-bill__button--edit{
    @apply bg-blue-600;
  }
</style>