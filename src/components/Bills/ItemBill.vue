<script setup lang="ts">
  import { PropType, toRefs } from 'vue';
  import PlListItem from '../Libraries/PlListItem.vue';
  import PlButton from '../Libraries/PlButton.vue';
  import PlAmount from '../Libraries/PlAmount.vue';
  import PlDate from '../Libraries/PlDate.vue'

  import { InvoiceInterface } from '../../models/invoice'

  const props = defineProps({
    bill: {
      type: Object as PropType<InvoiceInterface>,
      required: true
    }
  });

  const emit = defineEmits(['onEdit','onDelete','onChecked']);

  const { bill } = toRefs(props);

  const eEdit = () => {emit('onEdit',bill)}

  const eDelete = () => {emit('onDelete',bill)}

  const eChecked = () => {emit('onChecked',bill)}

</script>
<template>
  <PlListItem class="c-item-bill">
    <h2 class="c-item-bill__name">
      {{ bill.name }}
      <small class="c-item-bill__due-date">
        <strong>Vencimento:</strong>
        <pl-date :date="bill.due_date"></pl-date>
      </small>
    </h2>

    <div class="c-item-bill__block-end">
      <span class="c-item-bill__totalValue">
        <pl-amount :amount="bill.totalValue"></pl-amount></span>
      <div class="c-item-bill__group-buttons">
        <input type="checkbox" name="done[]" v-model="bill.done" @click="eChecked">
        <pl-button type="edit" @click="eEdit" class="c-item-bill__button">Editar</pl-button>
        <pl-button type="delete" @click="eDelete" class="c-item-bill__button">Excluír</pl-button>
      </div>
    </div>
  </PlListItem>
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

</style>