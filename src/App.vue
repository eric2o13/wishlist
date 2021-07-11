<template>
    <AppHeader></AppHeader>
    <ProductList :list="product.items"></ProductList>
    <transition name="slide-fade">
        <WishList v-if="wishList.active" :list="wishList.items"></WishList>
    </transition>
</template>

<style lang="scss">
    @import "~bootstrap/scss/bootstrap";
    @import "~bootstrap-icons/font/bootstrap-icons.css";

    body {
        background: #f8f8f8;
    }
    .container {
        max-width: 900px;
    }

    .slide-fade-enter-active {
        transition: all .25s ease;
    }

    .slide-fade-leave-active {
        transition: all .25s;
    }

    .slide-fade-enter, .slide-fade-leave-to {
        transform: translateX(200px);
        opacity: 0;
    }
</style>

<script lang="ts">
    import {defineComponent} from 'vue'
    import WishList from "@/components/WishList.vue";
    import ProductList from "@/components/ProductList.vue";
    import AppHeader from "@/components/AppHeader.vue";
    import {mapState} from "vuex";
    import store from "@/store";
    import {Product} from "@/interfaces/Product";

    export default defineComponent({
        name: 'App',
        components: {
            AppHeader,
            ProductList,
            WishList
        },
        computed: {
            ...mapState([
                'wishList',
                'product'
            ])
        },
        created(): void {
            store.dispatch('getProducts')
                .then((data: { data: Product[] }) => {
                    store.commit('setProducts', data)
                })
        }
    })
</script>
