<script setup>


</script>

<template>
  <router-link to="/component">컴포넌트</router-link>
    <router-link to="/mustache">mustache template</router-link>
    <router-view />  
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>