<template>
    <div class="app-product-list-component container py-5">
        <div v-if="list.length">
            <ul class="product-list p-0 ">
                <li v-for="item in list" :key="item.id" class="d-block rounded-3 overflow-hidden mt-4 mb-lg-4 shadow-sm">
                    <ProductListItem :product="item"></ProductListItem>
                </li>
            </ul>
        </div>
        <div v-else>
            No products found
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import {mapState} from "vuex";
    import ProductListItem from "@/components/ProductListItem.vue";
    import {Product} from "@/interfaces/Product";

    export default defineComponent({
        name: 'ProductList',
        components: {
            ProductListItem
        },
        props: {
            list: Array as () => Product[],
        },
        computed: {
            ...mapState([
                'wishList'
            ])
        }
    });
</script>

<style lang="scss">
    ul {
        list-style: none;
        padding: 0;
        margin: 0;
    }
</style>