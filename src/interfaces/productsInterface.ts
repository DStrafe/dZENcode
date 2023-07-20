export interface ProductsInterface {
    products?: {
        id?: 0,
        title?: string,
        description?: string,
        price?: number,
        discountPercentage?: number,
        rating?: number,
        stock?: number,
        brand?: string,
        category?: string,
        thumbnail?: string,
        images?: string[]
    }[],
    currentProducts?: {
        id?: 0,
        title?: string,
        description?: string,
        price?: number,
        discountPercentage?: number,
        rating?: number,
        stock?: number,
        brand?: string,
        category?: string,
        thumbnail?: string,
        images?: string[]
    }[],

}