import { defineStore } from 'pinia'

//Interfaces
import { InvoiceInterface } from '../models/invoice'

//Composables
import { genID } from '../composables/helpers';

//Mocks
import { mockBills } from '../mocks/bills';
import { DialogInterface } from '../models/dialog';

export const useBillsStore = defineStore('bills', {
  state: () => ({
    bills: mockBills as InvoiceInterface[],
    search: "" as string,
    sortBy: "created_at",
    dialog: {
      type: 'register',
      show: false
    } as  DialogInterface
  }),
  getters:{
    getBills: (state): Array<InvoiceInterface> => state.bills.sort((billA: InvoiceInterface,billB: InvoiceInterface) => {
      if( billA[state.sortBy] < billB[state.sortBy] ){
        return 1;
      }
      if( billA[state.sortBy] > billB[state.sortBy]   ){
        return -1;
      }
      return 0;
    }),
    getDialog: (state: any): DialogInterface => state.dialog,
    billsFiltered(): Array<InvoiceInterface>{
      return this.getBills.filter((itemBill: InvoiceInterface) => itemBill.name.indexOf(this.search) !== -1 ||  
                                                itemBill.due_date.indexOf(this.search) !== -1 ||
                                                itemBill.totalValue.indexOf(this.search) !== -1 
                                  )
    },
    totalBills(): string{
      return this.getBills.map((itemBill:any) => parseFloat(itemBill.totalValue))
                        .reduce((acc:any,curr:any) => acc + curr,0)
    },
    totalBillsAll(): string{
      return this.getBills.filter((item: any) => !item.done)
                        .map((itemBill:any) => parseFloat(itemBill.totalValue))
                        .reduce((acc:any,curr:any) => acc + curr,0)
    }
  },  
  actions:{
    insertBill(bill: InvoiceInterface){
        const id = genID();
        this.bills.unshift({ ...bill, id, created_at: new Date(), updated_at: null})
    },
    updateBill(bill: InvoiceInterface){

        const _bills: InvoiceInterface[] = this.bills.map((itemBill: InvoiceInterface) => {
            if( bill.id === itemBill.id ){
              itemBill.name = bill.name;
              itemBill.details = bill.details;
              itemBill.totalValue = bill.totalValue;
              itemBill.due_date = bill.due_date;
              itemBill.updated_at = new Date();
            }
            return itemBill;
        });

        this.bills = _bills;
    },
    deleteBill(id: string){
        const _bills: InvoiceInterface[] = this.bills.filter((itemBill: InvoiceInterface) => itemBill.id !== id);
        this.bills = _bills;
    },
    setSearch(search:string){
      this.search = search
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
  persist: true,
})