<template>
    <div class="text-start border-bottom py-2">
        <div class="d-flex py-2">
            <img v-lazy :data-src="generateThumbnailPath(item.product.imagePath)" src="../assets/placeholder-wish-list.png"/>
            <div class="mx-2">
                <h6 class="m-0">{{item.product.title}}</h6>
                <small class="mb-0">
                    {{item.quantity}} x {{item.product.price.symbol}}
                    {{item.product.price.value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 })}}
                </small>
            </div>
        </div>
        <div class="d-flex justify-content-between">
            <div>
                <button @click="decreaseQuantity(item)" class="decrease-button">
                    <i class="bi bi-dash"></i>
                </button>
                <span class="d-inline-block mx-2">{{item.quantity}}</span>
                <button @click="increaseQuantity(item)" class="increase-button">
                    <i class="bi bi-plus"></i>
                </button>
            </div>
            <button @click="removeFromWishList(item)" class="remove-button">
                <i class="bi bi-trash"></i>
            </button>

        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import store from "@/store";
    import {mapState} from "vuex";
    import {WishListItem} from "@/interfaces/WishListItem";


    export default defineComponent({
        name: 'WishListItem',
        props: {
            item: Object as () => WishListItem,
        },
        methods: {
            generateThumbnailPath(path:string) {
                return path.replace('450x200', '45x20');
            },
            updateQuantity(item:WishListItem){
                store.commit('setWishListProductQuantity', item);
            },
            decreaseQuantity(item:WishListItem) {
                if (item.quantity > 1)
                    item.quantity--;

                this.updateQuantity(item);

            },
            increaseQuantity(item:WishListItem) {
                item.quantity++;
                this.updateQuantity(item)
            },
            removeFromWishList(item:WishListItem){
                store.commit('removeWishListItemFromWishList', item);
            }
        },
        computed: {
            ...mapState([
                'wishList'
            ]),
        }

    });
</script>
<style scoped lang="scss">
    button {
        border: none;
        background: none;
        border-radius: 50%;

        &:hover, &:active {
            background: #EEE;
        }
    }
</style>
