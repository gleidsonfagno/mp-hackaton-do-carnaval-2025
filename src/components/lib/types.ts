export type Agendas = {
    id: number,
    title: string,
    descriptin: string
    date_time: Date,
    address: string,
    complete_address: string,
    city: string,
    neighborhood: string,
    price: string,
    event_url: string,
}

export type PaginationProps  = {
   links: {
    url: string;
    label: string;
    active: boolean;
    id: string;
   }[]
   lastPage: number;
}