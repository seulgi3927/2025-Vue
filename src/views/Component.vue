<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';

</script>

<template>
    <h1>Component.vue</h1>
        <div class="car1">
            <FrontWheel />
            <FrontWheel />        
        </div>

        <div class="car2">
            <RearWheel />
            <RearWheel />
        </div>
</template>

<style scoped>
.car1 {
    display: flex;
    gap: 10px;
}
.car2 {
    display: flex;
    gap: 10px;
}
</style>