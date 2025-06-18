import './assets/main.css'

import { createApp } from 'vue' // 부분적으로 받겠다, 이름 바꾸면 안됨
import { createPinia } from 'pinia'

import App from './App.vue' // 주소값을 받겠다, 이름 바꿔도 됨
import router from './router' // router 는 js 파일, ./router 아래 있는 파일들이 넘어옴

const app = createApp(App)

app.use(createPinia()) // 상태관리 뭐 쓸래? 나 pinia 쓸래 라고 하는것
app.use(router) // 이 뷰프로그램이 라우터도 사용할거다 

app.mount('#app') // 그러니까 이름을 막 바꾸면 안된다. 받는쪽 보내는쪽 다 같아야 한다
