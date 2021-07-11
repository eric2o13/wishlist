import {Product} from "@/interfaces/Product";
import {WishListItem} from "@/interfaces/WishListItem";

export interface WishListState {
    items: WishListItem[];
    active: boolean
}

export interface ProductState {
    items: Product[];
}

export interface AppState {
    wishList: WishListState;
    product: ProductState;
}
