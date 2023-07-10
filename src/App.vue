<script setup lang="ts">
  import Search from './components/Search.vue'
  import ItemBill from './components/ItemBill.vue'
  import { ref, computed } from 'vue';

  const bills = ref([
    {
      name: 'Conta 001',
      price: 1000.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 002',
      price: 2000.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 003',
      price: 300.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 004',
      price: 40.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 002',
      price: 2000.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 003',
      price: 300.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 004',
      price: 40.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 001',
      price: 1000.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 002',
      price: 2000.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 003',
      price: 300.00,
      due_date: "2023-08-15"
    },
    {
      name: 'Conta 004',
      price: 40.00,
      due_date: "2023-08-15"
    }
  ]);

  const totalBills = computed(() =>{
    return bills.value.map((itemBill:any) => itemBill.price).reduce((acc:any,curr:any) => acc + curr,0)
  })

</script>

<template>
  <div class="page-base">
    <h1 class="text-blue">Planeja Fácil</h1>
    
    <div class="c-block-filter">
      <Search /> <button class="c-block-filter__button-create">Nova Conta</button>
    </div>

    <div class="list-bills">
      <ItemBill v-for="bill in bills" :bill="bill" :key="bill"></ItemBill>
    </div>
    {{ $filters.currencyBRL(totalBills) }}
  </div>
</template>

<style scoped>
.page-base{
  @apply flex flex-col items-center justify-center w-full h-screen gap-4 p-8;
}

.page-base .list-bills{
  @apply flex flex-col w-full h-full max-h-96 gap-2 overflow-y-scroll overflow-x-hidden;
}

.c-block-filter{
  @apply flex items-center justify-between w-full gap-4;
}

.c-block-filter__button-create{
  @apply bg-green-600 text-white;
}
</style>
