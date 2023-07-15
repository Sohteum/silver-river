### 설치
  - vue cli 3이상
    ```javascript
    npm install vue-router@next
    ```
  - vue cli 2이상
    ```javascript
    npm install vue-router
    ```
    
### router 구조
  - 라우터 js파일
    ```javascript
    //createWebHistory : html5 history //싱글페이지를 지원하는 곳에 호스팅할때//이거 사용예정
    //createWebHashHistory : hash #링크 //아파치서버같은 #이 자동으로 붙는다
    //createMemoryHistory : history기능이 없기때문에 앞,뒤경로 변경불가능 //페이지에는 영향을 안주고 페이지의 주소이름만 살짝바꿔줌. 앞으로가기뒤로가기안됨
    import { createRouter,createWebHistory,} from "vue-router"
    import CompHome from 'components/CompHome.vue'
    import CompList from 'components/CompList.vue'
    const router =  createRouter({
      history : createWebHistory(),
      routes : [
        {
          path : '/',
          name : 'Home', 
          component : ''
        },
        {
          path : '/list',
          component : ''
        },
        {
          path : '/404',
          component : Comp404,
        },
        {
          path: '/:pathMatch(.*)*',
          redirect : '/404',
        },
      ]
    })
    export default router
    ```
  - main.js
    ```javascript
    import router from './router'
    createApp(App).use(router).mount('#app')
    ```
  - App.vue
    ``` html
    <template>
      <Comp-Nav/> <!--항상 출력되는 컴포넌트-->
      <router-view/> <!-- 주소별로 출력되는 컴포넌트 -->
    </template>
    ```
  - link 
    ```html    
    <router-link to='/'>home</router-link>
    <router-link to='/list'>list</router-link>
    <!--name 속성사용시 to속성에 객체바인딩 가능 (하단예시)-->
    <router-link :to="{ name: 'user', params: { userId: 123 }}">user</router-link> 
    ```
### useRoute
  - createRouter
    ```javascript
    {
      path : '/',
      component : '/add/:id'
    },
    ```  
  - useRoute 
    ```javascript
    const route = useRoute()
    const id = parseInt(route.params.id)
    const path = route.path
    ```  
  - useRouter
    ```javascript
    const router = useRouter()
    router.push('/')
    ```

  