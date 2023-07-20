export interface OrdersInterface {
    orders: {
        id?: number,
        type?: string,
        title?: string,
        number?: number,
        date?: string,
        price?: number,
        checked?: boolean,
        products?: {
            id?: number,
            title?: string,
            image?: string,
        }[],
    }[],
    currentOrders: {
        id?: number,
        type?: string,
        title?: string,
        number?: number,
        date?: string,
        price?: number,
        checked?: boolean,
        products?: {
            id?: number,
            title?: string,
            image?: string,
        }[],
    }[],
    checkedOrders?: {}[],
    activeProducts?: {
        id?: number,
        title?: string,
        image?: string,
    }[] | undefined,
}

export interface Product {
    id?: number;
    title?: string;
    image?: string;
}
