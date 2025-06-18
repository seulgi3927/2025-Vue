<script setup>
// props 외부에서 들어오는 데이터 
const props = defineProps({
    color: String // 타입지정, 타입지정 했는데 지정한 타입으로 안 들어오면 에러남
    // 숫자는 숫자로 넣어도 문자열로 출력해서 에러는 안난다
    // 무조건 타입지정을 해줘야한다 그렇지 않으면 에러남
});
</script>

<template>
    <!-- :style 이것은 vue문법 
        중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿) 
    -->
    <div :style="{color: props.color}">{{ props.color || 'BLACK!!' }} TIRE</div>
</template>

<style scoped>
</style>