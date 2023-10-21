<script setup>
    import { computed } from 'vue';
    import { useBillsStore } from '../stores/useBillsStore';
    import { useIncomeStore } from '../stores/useIncomesStore';

    //Components

    import FilterForm from '../components/Filter/Form.vue';
    import BillsList from '../components/Bills/List.vue'

    const billsStore = useBillsStore();
    const insomesStore = useIncomeStore();

    const totalBills = computed(() => billsStore.totalBills )
    const totalBillsAll = computed(() => billsStore.totalBillsAll)
    const totalInsomes = computed(() => insomesStore.totalInsomes )

    const toggleBillShowDialog = () => {
        billsStore.openDialog();
        billsStore.setTypeDialog('register');
    }

</script>
<template>

    <div class="p-home">

        <div class="c-block-filter">

            <FilterForm />
           
        </div>
    
        <div class="list-bills">
            <BillsList />
        </div>
    
        <!-- <pl-footer type="fixed">
            <div class="c-total">
    
                <div class="c-total__insome">
                    <span class="c-total__insome-label">Total Rendas</span>
                    <pl-amount class="c-total__insome-amount" :amount="totalInsomes"></pl-amount>
                </div>
                
                <div class="c-total__bills">
                    <span class="c-total__bills--label">Total Contas:</span>
                    <pl-amount class="c-total-bills-amount" :amount="totalBills"></pl-amount>
                </div>
    
                <div class="c-total__all">
                    <span class="c-total__all-label">Total Sobra:</span>
                    <pl-amount class="c-total__all-amount" :amount="totalInsomes - totalBills"></pl-amount>
                </div>

                <div class="c-total__bills">
                    <span class="c-total__bills--label">Total Contas à Pagar:</span>
                    <pl-amount class="c-total-bills-amount" :amount="totalBillsAll"></pl-amount>
                </div>
    
            </div>
        </pl-footer> -->

    </div>

</template>
<style scoped>

.p-home{
    @apply w-full pl-4 pr-4 pt-4 pb-16;
}

.c-block-filter{
  @apply flex items-center justify-between w-full gap-4 p-2;
}

.c-block-filter__button-create{
  @apply bg-green-600 text-white;
}

.c-total{
    @apply flex gap-4 justify-center;
}

.c-total__insome,
.c-total__bills,
.c-total__all{
    @apply flex flex-col gap-2 justify-center;
}

.total-bills{
  @apply flex gap-2 items-center justify-center text-white;
}

.total-bills__amount{
  @apply  bg-red-700 text-white rounded-full pl-4 pt-1 pb-1 pr-4;
}


</style>