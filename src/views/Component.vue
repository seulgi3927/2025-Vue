<script setup>
import FrontWheel from '@/components/FrontWheel.vue';
import RearWheel from '@/components/RearWheel.vue';
import { useCounterStore } from '@/stores/counter.js';
const counterstore = useCounterStore();

</script>

<template>
    <h1>Hello Vue!</h1>
    <h1>Hello Vue!</h1>
    <button @click="counterstore.increment">회전</button>
    <FrontWheel></FrontWheel>
    <RearWheel></RearWheel>

        <div class="car1">
            <FrontWheel />
            <FrontWheel />        
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