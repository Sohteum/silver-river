//싱글페이지를 지원하지않아서 노드제이에스를 배우는것.
//#은 주소에 영향을 안줘서 이전에 히스토리라우터로 변경함
import { createRouter, createWebHistory, } from "vue-router"
import CompHome from '@/components/CompHome.vue'
import CompList from '@/components/CompList.vue'
import CompDetail from '@/components/CompDeail.vue'
import CompError from '@/components/CompError.vue'


const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
      path : '/',
      component : 'CompHome'
    },
    {
      path : '/list',
      component : 'CompList'
    },
    {
      path : '/detail/:id', //여기 변수니까 아무거나 넣으면 됨
      name: 'CompDetail', 
      component : 'CompDetail',
    },
    {
      path: '/404',
      redirect : 'CompError',
    },
    {
      path: '/:pathMatch(.*)*',
      redirect : '/404',
    },//이 외의 모든 주소는 404를 출력한다
  ]
})

export default router