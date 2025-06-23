<script setup>
import { reactive, computed } from 'vue';
//반응형 상태
const state = reactive({
    mvpId: 9,
    players: [
    { id: 7, name: 'John Doe' },
    { id: 9, name: 'Jane Lee' },
    { id: 12, name: 'James Park' },
    ],
});
// 옵셔널 체이닝 사용하지 않았을 때
const getMvpName = () => {
    if (state.mvpId) {
    const player = state.players.find((item) => item.id === state.mvpId);
    if (player) {
        return player.name;
    }
    }
        return '없음';
};
const getMvpNameNice = () => {
    console.log("getMvpNameNice 메소드");
    return state.players.find((item) => item.id === state.mvpId)?.name || '없음';
};
// 컴퓨티드 : 연산의 결과를 캐시화, 메소드처럼 여러번 일하지 않음
// 호출때마다 결과가 달라져야함 => 메소드
// 아님 => 컴퓨티드 (성능상 이렇게 하는게 좋을 수도)
const computedMvpName = computed(() => {
    console.log("computedMvpName 컴퓨티드");
    return state.players.find((item) => item.id === state.mvpId)?.name || '없음';
});
</script>
<template>
    <h1>Chaper06</h1>
    <h1>오늘의 MVP</h1>
<template v-if="state.mvpId">
    <!-- find() : 배열에 있는 함수(map, filter같이),
            찾는데 사용(조건이 true일 때까지), 하나만 찾음, 콜백 함수를 보냄
            옵셔널 체이닝 사용 -->
    {{ state.players.find((item) => item.id === state.mvpId)?.name || '없음' }}
</template>
    <div>{{ getMvpNameNice() }}</div>
    <div>{{ computedMvpName }}</div>
</template>
<style scoped></style>





