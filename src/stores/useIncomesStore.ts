import { defineStore } from 'pinia'
import { Income } from '../models/income'
import { genID } from '../composables/helpers'
import { DialogInterface } from '../models/dialog'

export type RootState = {
    incomes: Array<Income>,
    dialog: DialogInterface
}

export const useIncomeStore = defineStore('incomes',{
    state: () => ({
            incomes: [] as Array<Income>,
            dialog: {
                type: 'register',
                show: false
            } as  DialogInterface
        } as RootState ),
    getters: {
        getDialog: (state:any): DialogInterface => state.dialog,
        getIncomes: (state: any): Array<Income> => state.incomes,
        totalInsomes: (state: any): Number => state.incomes.reduce((acc: Income,currentIncome: Income) => parseFloat(acc.amount) + parseFloat(currentIncome.amount) )
    },
    actions: {
        insert(income: Income ): void{
            const _income: Income = { ...income, id: genID()}
            this.incomes.unshift(_income)
        },
        delete(id: string ): void{
            const incomes: Array<Income> = this.incomes.filter((item:Income) => item.id !== id);
            this.incomes = incomes;
        },
        find(id: string ): Income|null|undefined{
            const income: Income|null|undefined = this.incomes.find((item:Income) => item.id === id);
            return income;
        },
        update(income: Income ): void {
            const incomes: Array<Income> = this.incomes.map((item:Income) => {
                if(item.id === income.id){
                    return income;
                }
                return item;
            });
            this.incomes = incomes
        },
        openDialog(){
            this.dialog.show = true;
        },
        setTypeDialog(type: string){
            this.dialog.type = type;
        },
        closeDialog(){
            this.dialog.show = false;
        }
    },
    persist: true
})