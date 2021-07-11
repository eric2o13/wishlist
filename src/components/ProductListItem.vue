<template>
    <div>
        <div class="media align-items-lg-center d-flex justify-content-between flex-column flex-sm-row">
            <div class="image-container position-relative ml-lg-5 order-1 order-sm-2 col-sm-6">
                <div class="wish-list-btn-container">
                    <button v-if="isOnWishList(product)"
                            class="wish-list-btn remove-from-wish-list-btn"
                            @click="removeFromWishList(product)">
                        <i class="bi bi-heart-fill"></i>
                    </button>
                    <button v-else
                            class="wish-list-btn add-to-wish-list-btn"
                            @click="addToWishList(product)">
                        <i class="bi bi-heart"></i>
                    </button>
                </div>
                <img v-lazy :data-src="getImagePath(product)" src="../assets/placeholder-product.png" class="img-fluid"/>
            </div>
            <div class="p-4 order-2 order-sm-1 col-sm-6">
                <h5 class="card-title">{{product.title}}</h5>
                <p class="card-text mb-0 mb-lg-2 text-muted">
                    {{product.description}}
                </p>
                <span class="text-muted">
                    {{product.price.symbol}}
                    {{product.price.value.toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }}
                </span>

            </div>
        </div>

    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import {mapState} from "vuex";
    import {Product} from "@/interfaces/Product";
    import store from "@/store";
    import {WishListItem} from "@/interfaces/WishListItem";

    export default defineComponent({
        name: 'ProductListItem',
        props: {
            product: Object as () => Product,
        },
        methods: {
            isOnWishList(item: Product) {
                return this.wishList.items.find((w: WishListItem) => item.id === w.product.id);
            },
            addToWishList(item: Product) {
                store.commit('addProductToWishList', item);
            },
            removeFromWishList(item: Product) {
                store.commit('removeProductFromWishList', item);
            },
            getImagePath(item: Product) {
                return item.imagePath;
            }
        },
        computed: {
            ...mapState([
                'wishList'
            ])
        }
    });
</script>

<style scoped lang="scss">

    .image-container{
        background: #DDD;
    }

    .media {
        background: white;
    }

    .wish-list-btn-container {
        position: absolute;
        top: 8px;
        right: 8px;
    }

    button {
        border-radius: 50%;
        height: 50px;
        width: 50px;
        border: none;
        background: none;
        transition: background 0.25s;

        &:hover {
            background: rgba(0, 0, 0, 0.35);
        }

        i {
            color: white;
            position: relative;
            top: 2px;
            font-size: 24px;

            &.active-icon {
                color: crimson;
            }
        }
    }
</style>