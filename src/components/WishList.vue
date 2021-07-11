<template>
    <div class="app-wish-list-component">
        <div v-if="list.length" class="wish-list-container">
            <h6 class="mx-4 py-4 border-bottom">Your wish list</h6>
            <ul class="wish-list d-block p-0">
                <transition-group name="list">
                    <li v-for="item in list"
                        class="px-4"
                        :key="item.product.id">
                        <WishListItem :item="item"></WishListItem>
                    </li>
                </transition-group>
            </ul>
            <div class="mx-4 text-end">
                Total: $
                <span class="text-dark fw-bold ">
                    {{ wishList.items.reduce((sum, value) => {
                        return sum + (parseInt(value.quantity) * value.product.price.value) }, 0)
                    .toLocaleString("en-US", { maximumFractionDigits: 2, minimumFractionDigits: 2 }) }}
                </span>
            </div>
        </div>
        <div v-else>
            <p class="text-center mt-4">
                No products on wish list
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import {defineComponent} from 'vue';
    import WishListItem from "@/components/WishListItem.vue";
    import {mapState} from "vuex";

    export default defineComponent({
        name: 'WishList',
        props: {
            list: Array,
        },
        components: {
            WishListItem
        },
        computed: {
            ...mapState([
                'wishList'
            ])
        }
    });
</script>

<style scoped lang="scss">
    .app-wish-list-component {
        position: fixed;
        top: 61px;
        right: 0;
        bottom: 0;
        width: 330px;
        background: white;
        border-left: 1px solid #EEE;
    }

    .wish-list-container {
        max-height: 100%;
        overflow-x: hidden;
        overflow-y: auto;
    }

    .list-item {
        display: inline-block;
    }

    .list-enter-active, .list-leave-active {
        transition: all 0.25s;
    }
    .list-enter {
        transform: translateX(20px);
        opacity: 0;
    }
    .list-leave-to {
        transform: translateX(20px);
        opacity: 0;
    }
</style>