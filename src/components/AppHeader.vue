<template>
    <div class="app-header">
        <div class="container d-flex justify-content-between">
            <CompanyLogo></CompanyLogo>
            <div id="nav">
                <button class="favorites-button" @click="toggleWishList()">
                    <span class="badge count">{{(wishList.items.reduce((sum, value) => { return sum + (value.quantity) }, 0))}}</span>
                    <i class="bi bi-heart-fill"></i>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import CompanyLogo from "@/components/CompanyLogo.vue";
    import {mapState} from "vuex";
    import store from "@/store";

    export default defineComponent({
        name: 'AppHeader',
        components: {
            CompanyLogo
        },
        methods: {
            toggleWishList(){
                store.commit('showWishList', !this.wishList.active);
            },
        },
        computed: {
            ...mapState([
                'wishList'
            ]),
        }
    });
</script>

<style scoped lang="scss">
    .app-header {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        background: white;
        z-index: 10;
        border-bottom: 2px solid #eee;
    }
    .badge {
        position: absolute;
        padding: 0;
        top: 23px;
        left: 0px;
        width: 60px;
        text-align: center;
        color: white;
        background: #000;
        font-size: 11px;
        display: inline-block;
        background: none;
        z-index: 10;
    }
    button {
        display: inline-block;
        position: relative;
        height: 60px;
        width: 60px;
        border: none;
        border-left: 1px solid #EEE;
        border-right: 1px solid #EEE;
        background: none;
        transition: background 0.25s;
        &:hover {
            background: #EEE;
        }

        i {
            color: crimson;
            font-size: 32px;
            position: relative;
            left: 1px;
        }
    }
</style>

