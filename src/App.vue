<script setup lang="ts">
  import { computed } from 'vue';

  //Components
  import Search from './components/Search.vue';
  import BillsList from './components/Bills/List.vue'

  import { useBillsStore } from './stores/useBillsStore';

  const billsStore = useBillsStore();

  const totalBills = computed(() => billsStore.totalBills )

  const toggleShowDialog = () =>{
    billsStore.openDialog();
    billsStore.setTypeDialog('register');
  }
  
</script>

<template>
  <div class="page-base">
    <h1 class="text-blue">Planeja Fácil</h1>
    
    <div class="c-block-filter">
      <Search /> 
      <button class="c-block-filter__button-create" 
        @click="toggleShowDialog()">
        Nova Conta
      </button>
    </div>

    <div class="list-bills">
     <BillsList />
    </div>

    <div class="total-bills">
      <span class="total-bills__label">Valor Total:</span>
      <strong class="total-bills__amount"> {{ totalBills }} </strong>
    </div>

  </div>
</template>

<style scoped>
.page-base{
  @apply flex flex-col items-center justify-center w-full h-screen gap-4 p-8;
}

.page-base .list-bills{
  @apply flex flex-col w-full h-full gap-2;
}

.c-block-filter{
  @apply flex items-center justify-between w-full gap-4;
}

.c-block-filter__button-create{
  @apply bg-green-600 text-white;
}

.total-bills{
  @apply flex gap-2 items-center justify-center text-white;
}

.total-bills__amount{
  @apply  bg-red-700 text-white rounded-full pl-4 pt-1 pb-1 pr-4;
}
</style>
