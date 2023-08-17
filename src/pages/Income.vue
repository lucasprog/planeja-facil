<script setup>

    import IncomeList from '../components/Incomes/List.vue';
    import { useIncomeStore } from '../stores/useIncomesStore';
  
    const incomeStore = useIncomeStore();

    const toggleIncomeShowDialog = () => {
        incomeStore.openDialog();
        incomeStore.setTypeDialog('register');
    }
  
</script>
<template> 
    <button class="c-block-filter__button-create" 
        @click="toggleIncomeShowDialog()">
        Nova Renda
    </button>

    <IncomeList></IncomeList>
</template>