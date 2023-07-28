import { genID } from "../composables/helpers";
import { InvoiceInterface } from "../models/invoice";

export const mockBills: InvoiceInterface[] = [
    {
      id: genID(),
      name: 'Mock - Conta 001',
      totalValue: "1000.00",
      due_date: "2023-08-15",
      created_at: new Date(),
      updated_at: null
    },
    {
      id: genID(),
      name: 'Mock - Conta 002',
      totalValue: "2000.00",
      due_date: "2023-08-15",
      created_at: new Date(),
      updated_at: null
    },
    {
      id: genID(),
      name: 'Mock - Conta 003',
      totalValue: "300.00",
      due_date: "2023-08-15",
      created_at: new Date(),
      updated_at: null
    },
]