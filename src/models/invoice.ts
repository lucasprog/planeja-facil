export interface InvoiceInterface {
    name : string,
    details? : string,
    totalValue : string,
    due_date : string,
    id: string,
    created_at?: Date,
    updated_at: Date|null
}