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
    <div class="c-item-bill__block-start">
      <input type="checkbox" name="done[]" v-model="bill.done" @click="eChecked" />
      <h2 class="c-item-bill__name">
        {{ bill.name }}
        <small class="c-item-bill__due-date">
          <pl-date :date="bill.due_date"></pl-date>
        </small>
      </h2>
    </div>

    <div class="c-item-bill__block-end">
      <span class="c-item-bill__totalValue">
        <pl-amount :amount="bill.totalValue"></pl-amount>
      </span>
      <div class="c-item-bill__group-buttons">
        <pl-button type="success" class="c-item-bill_button">Ver</pl-button>
        <pl-button type="edit" @click="eEdit" class="c-item-bill__button">Editar</pl-button>
        <pl-button type="delete" @click="eDelete" class="c-item-bill__button">Excluír</pl-button>
      </div>
    </div>
  </PlListItem>
</template>
<style scoped>
  .c-item-bill{
    @apply flex justify-between items-center gap-4 w-full min-h-[3rem] bg-white rounded-lg p-8 hover:bg-gray-100 shadow-sm;
  }

  .c-item-bill__totalValue{
    @apply font-semibold text-red-500 text-xl;
  }

  .c-item-bill__name{
    @apply flex flex-col text-[#1e1e1e] font-bold text-lg;
  }

  .c-item-bill__due-date{
    @apply text-xs text-gray-900 font-normal;
  }

  .c-item-bill__block-start,
  .c-item-bill__block-end{
    @apply flex items-center justify-center gap-4;
  }

  .c-item-bill__group-buttons{
    @apply flex items-center justify-center gap-2;
  }

</style>