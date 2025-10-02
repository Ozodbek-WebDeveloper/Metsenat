// my type

export  interface ISponsorPaging {
    search:string | null,
    ordering:string | null,
    page:number | null,
    page_size:number | null,
}
export interface PaymentType {
    id: number;
    title: string;
}

export interface Sponsor {
    id: number;
    full_name: string;
    phone: string;
    sum: number;
    spent: number;
    firm: string;
    created_at: string;
    get_status_display: string;
    payment_type: PaymentType[];
}

export interface SponsorListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: Sponsor[];
}
