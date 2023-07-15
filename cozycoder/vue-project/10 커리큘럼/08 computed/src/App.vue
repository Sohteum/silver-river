<template>
 <CompCalc/>
 <CompLi/>
</template>

<script>
import CompCalc from '@/components/CompCalc.vue';
import CompLi from '@/components/CompLi.vue';

export default {
  name: 'App',
  setup(){

  },
  components:{CompCalc, CompLi}
}
</script>
<!-- 
  computed 변수를 스테잇으로 관리하는데, 여기서는 레프라고 하좌나? 리액트로는 유즈메모리라고 생각하면됨. 최적화에....유즈뭐시기들
  유즈메모는 최적화목적으로만 쓰는건 아니고 변수가 변하면 화면이 변한다. 그게 리액티브하다. 반응형이라고 하는데,
  그게 스테잇을 관리하는것. 특정스테잇 변했을때 같이 변해야하는것들. 
 -->