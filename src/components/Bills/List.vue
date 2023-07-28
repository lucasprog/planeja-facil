<script setup lang="ts">

  //Models Interfaces
  import { ref, computed } from 'vue';

  import { useBillsStore } from '../../stores/useBillsStore';
  
  import { InvoiceInterface } from '../../models/invoice';

  import ItemBill from '../Bills/ItemBill.vue'
  import ModalDialog from '../ModalDialog.vue'

  const billsStore = useBillsStore();

  const bills = computed(() => billsStore.billsFiltered );

  const billToDelete = ref<InvoiceInterface | null>(null);

  const deleteModalDialog = ref(false);

  const formValueCleared = {
      id: '',
      name : "",
      details : "",
      totalValue : "0",
      due_date : ""
  }

  const form = ref<InvoiceInterface>(formValueCleared);

  const onEdit = (bill: InvoiceInterface) => {
    form.value = {...bill};
    billsStore.setTypeDialog('update');
    billsStore.openDialog();
  }

  const onDelete = (bill: InvoiceInterface) => {
    deleteModalDialog.value = true;
    billToDelete.value = bill;
  }

  const clearForm = () => form.value = formValueCleared

  const deleteBill = () => {
    if ( billToDelete.value ){
      billsStore.deleteBill(billToDelete.value.id);
    }
    deleteModalDialog.value = false;
  }

  const onSave = () =>{
    if( billsStore.getDialog.type === 'register' ){
      billsStore.insertBill(form.value)
      clearForm()
    }else{
      billsStore.updateBill(form.value)
    }

    billsStore.closeDialog();
  }

  const onOpenModal = () => {
    if(billsStore.getDialog.type === 'register'){
      clearForm()
    }
  }

</script>
<template>
  <div class="c-bills-list">
    <div class="c-bills-list__inner">

      <ItemBill 
          v-for="(bill,key) in bills" 
          :bill="bill" 
          :key="key"
          @onEdit="onEdit(bill)"
          @onDelete="onDelete(bill)"></ItemBill>

    </div>

    <ModalDialog 
      :show="billsStore.getDialog.show" 
      @open="onOpenModal"
      @close="billsStore.closeDialog">
      <template #body>
        <form @submit.prevent="onSave" class="flex flex-col gap-2 w-full">
          <input type="text" 
                name="name"
                v-model="form.name" 
                placeholder="Nome da conta"/>
          
          <textarea name="detail" 
                v-model="form.details" 
                placeholder="Detalhes da Conta"></textarea>

          <input type="text" 
                name="totalValue"
                v-model="form.totalValue" 
                placeholder="Total da Conta" />
          
          <input type="date" 
                name="due_date"
                v-model="form.due_date" />

          <button type="submit"> Salvar </button>
        </form>
      </template>
    </ModalDialog>

    <ModalDialog 
      :show="deleteModalDialog" 
      @close="deleteModalDialog = false">
      <template #header>
        Excluír Conta
      </template>
      <template #body>
        <p>Deseja realmente excluír essa conta?</p>
      </template>
      <template #footer>
        <button type="button" @click="deleteModalDialog = false">Não</button>
        <button type="button" @click="deleteBill()">Sim</button>
      </template>
    </ModalDialog>
  </div>  
</template>
<style scoped>

  .c-bills-list__inner{
    @apply flex flex-col w-full h-full max-h-80 gap-2 overflow-y-scroll overflow-x-hidden;
  }

</style>