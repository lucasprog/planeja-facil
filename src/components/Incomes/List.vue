<script setup lang="ts">

    import { ComputedRef, computed, ref } from 'vue'
    import { useIncomeStore } from '../../stores/useIncomesStore';
    import { Income } from '../../models/income';
    import PlListItem from '../Libraries/PlListItem.vue';
    import PlAmount from '../Libraries/PlAmount.vue';

    import ModalDialog from '../ModalDialog.vue';

    const incomeStore = useIncomeStore();

    const { dialog: dialogForm} = incomeStore;

    const incomesList: ComputedRef<Income> = computed(() => incomeStore.getIncomes);

    const closeDialog = () => {
        incomeStore.closeDialog();
    }

    const clearForm = () => {
      form.value = {
        title: '',
        description: '',
        amount: 0,
        id: undefined
      }
    }

    const form = ref<Income>({
      title: '',
      description: '',
      amount: 0,
      id: undefined
    })

    const onSave = () => {
      if( dialogForm.type === 'register'){
        incomeStore.insert(form.value)
        clearForm()
      }else{
        incomeStore.update(form.value)
      }

      incomeStore.closeDialog();
    }

    const onDelete = (income: Income) => {
      if( !income.id ){
        return;
      }
      incomeStore.delete(income.id)
    }

    const onEdit = (income: Income) => {

    }
</script>
<template>
    <div class="c-income-list">
        <PlListItem v-for="income in incomesList"
          :key="income.id">
          {{  income.title }}
          <pl-amount :amount="income.amount"></pl-amount>
          <div class="c-income-list__group-button">
            <pl-button type="edit" @click="onEdit(income)" class="c-item-bill__button">Editar</pl-button>
            <pl-button type="delete" @click="onDelete(income)" class="c-item-bill__button">Excluír</pl-button>
          </div>
        </PlListItem>
    </div>
    <ModalDialog 
      :show="dialogForm.show" 
      @close="closeDialog()">
      <template #header>
        {{ dialogForm.type === 'register'? 'Nova Renda':'Editar Renda' }}
      </template>
      <template #body>
        <form @submit.prevent="onSave" class="flex flex-col gap-2 w-full">
          <input type="text" 
                name="title"
                v-model="form.title" 
                placeholder="Título da conta"/>
          <textarea v-model="form.description" placeholder="Descrição"></textarea>
          <input type="text"
            name="amount"
            v-model="form.amount"
            placeholder="Valor da Renda" />

          <button type="submit"> Salvar </button>
        </form>
      </template>
    </ModalDialog>
</template>