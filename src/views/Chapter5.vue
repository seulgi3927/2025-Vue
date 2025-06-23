<script setup>
import { ref, reactive, nextTick } from 'vue';
// ref메소드 : 반응형 상태 객체 주소값을 리턴, 초기값을 value 속성에 저장
const pushUp = ref(0);
const increasePushUp = () => {
  pushUp.value++;
  nextTick(() => {
    // 보통 이렇게 작성하진 않음
    console.log(document.querySelector('#pushUp').innerText);
  });
  console.log('푸시업 이벤트 발생!', pushUp.value);
};
// 둘 중에 마음에 드는 방법으로
const state = reactive({
  sitUp: 0, // 윗몸 일으키기 개수
});
const increaseSitUp = () => {
  state.sitUp++;
  console.log('싯업 이벤트 발생!', state.sitUp);
};
</script>
<template>
    <h1>Chapter05.vue - 반응형 상태</h1>
<hr />
    <!-- :을 쓰지 않아서 변수의 주소값을 연결한 것은 아님 -->
    <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
    <div id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</div>
<hr />
    <button @click="increasePushUp">팔 굽혀 펴기 증가</button>
    <button @click="increaseSitUp">윗몸 일으키기 증가</button>
</template>
<style scoped></style>