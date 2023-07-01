<template>
  <h1>state</h1>
  <hr>
  <h2>보간법(변수화면에뿌리기)</h2>
  <p>num:{{ num }}</p>
  <hr>
  <h2>이벤트바인딩(v-on)</h2>
  <button
    v-on:click="num++">1증가</button><!-- 브이다시, :콜론이 붙을때 여기는 더이상 ''아님 스크립트문법임, 여기서 바로 alert하면 에러남. 리턴한돼는 객체와 함수 변수 사용할 수 있음 얼랏할려면 함수만들어서 해야함-->
  <button @click="fnIncrease2">2증가</button><!--파라미터에 값이 없을때는 소괄호가 있으나 없으나 차이없음 빼도됨-->
  <button @click="fnIncreaseN($event.target.value)" value="3">3증가</button>
  <button @click="fnIncreaseN($event.target.value)" value="4">4증가</button>
  <button @click="fnIncreaseValue($event)" value="5">5증가</button>
  <hr>
  <h2>v-bind</h2><!--  -->
  <p v-bind:class="isActive&&'active'">class이름을 v-bind로 연결했어요</p><!-- isActive가 트루라면 액티브를 넣어준다  -->
  <p :class="isActive">class이름을 v-bind로 연결했어요</p>
  <button @click="isActive=!isActive">토글</button><!-- 클릭하면 빨게졌다가 다시 돌아왓다가 하기 -->
  <hr>
  <h2>event-modifier(이벤트수식어)</h2>
  <a @click.prevent="console.log('anchor를 클릭했어요')" href="http://www.naver.com">anchor클릭<!-- e.preventDefault -->
  <span @click.stop.prevent="console.log('span을 클릭했어요')">span클릭</span><!-- stop=stopPropergation -->
  </a><!-- 폼에 많이 사용하는 방법 -->

</template>
    
<script>
import { ref } from 'vue';


export default {
  setup() {//컴포지션 문법//이 안에서 만들어야 스테잇 연결가능
    const num = ref(0)
    /* v-on */
    const fnIncrease2 = () => {
      num.value += 2
    }
    const fnIncreaseN = (increase) => {
      num.value += parseInt(increase)
    }
    const fnIncreaseValue = (e) => {
      num.value += parseInt(e.target.value)
    }
    /* v-bind */
    const isActive = ref(true)//반응형 : 변수가 바뀌면 화면이 알아서 바뀐다. 이걸 리액티브라고 함//css는 리스폰시브



    return {//템플릿에서 사용할려면 리턴을 해주어야함
      num,
      fnIncrease2,
      fnIncreaseN,
      fnIncreaseValue,
      isActive,
    }
  }//setup
}

</script>

<style>
h2 {
  font-size: 1rem;
}

p.active {
  color: red;
}
</style>