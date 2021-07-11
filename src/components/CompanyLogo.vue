<template>
    <div class="company-logo">
        <i class="bi bi-paint-bucket logo d-inline-block"></i>
        <div>
            <h1>The Paint Shop</h1>
            <h2 class="text-muted">You need paint, we sell paint</h2>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'CompanyLogo',
    });
</script>

<style scoped lang="scss">
    .company-logo {
        align-items: center;
        display: flex;
    }
    .logo {
        margin-right: 10px;
        font-size: 40px;
        color: #c3c3c3;
    }
    h1 {
        margin: 0;
        font-size: 18px;
        color: #c71223;
    }
    h2 {
        font-size: 11px;

    }
</style>
