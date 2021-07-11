export interface Product {
    readonly id: number;
    title: string;
    description: string;
    imagePath?: string;
    price: ProductPrice;
}

export interface ProductPrice {
    symbol: string;
    value: number;
}
