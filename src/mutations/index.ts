import {AppState} from "@/interfaces/State";
import {Product} from "@/interfaces/Product";
import {WishListItem} from "@/interfaces/WishListItem";

export default {
    setAppState(state:AppState, payload: AppState):void {
        state.wishList = payload.wishList;
    },
    setProducts(state: AppState, payload: { data: Product[] }):void {
        state.product.items = payload.data;
    },
    addProductToWishList(state: AppState, payload: Product):void {
        const wishListItem: WishListItem = {product: payload, quantity: 1};
        state.wishList.items = [...state.wishList.items, wishListItem];
    },
    removeProductFromWishList(state: AppState, payload: Product):void {
        state.wishList.items = state.wishList.items.filter((w: WishListItem) => w.product.id !== payload.id);
    },
    setWishListProductQuantity(state: AppState, payload: WishListItem):void {
        const item = state.wishList.items.find((w:WishListItem) => w.product.id === payload.product.id);
        if (item) {
            item.quantity = payload.quantity;
        }
    },
    removeWishListItemFromWishList(state:AppState, payload: WishListItem):void {
        state.wishList.items = state.wishList.items.filter((w: WishListItem) => w.product.id !== payload.product.id);
    },
    showWishList(state:AppState, payload: boolean):void {
        state.wishList.active = payload;
    }
}