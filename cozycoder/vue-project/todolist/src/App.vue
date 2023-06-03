<template>
  <CompHeader />

  <CompAddForm
    @emitAddListHandler="_setTodoArr"
  /><!-- 메일 받았을때 부모가 실행할 일, 제목을 배열에 추가하라고 보낸거잖아. 리액트로 치면 자식한테 받아서 셋을 하는거. -->
  <!-- 에밋 보낼때 소괄호넣으면 절대안됨 파람을 넣으면 절대안되니까 그런게 아닐까 하는 선생님의 추측 절대 콜백함수 적으면 안됨 -->

  <ul>
    <CompLi v-for="v in _todoArr" :key="v.id" :data="v"/><!-- 앞에 v가 붙으면 안에 스크립트. 브이포는 키랑 무조건 같이 쓰기 -->
  </ul>

  <!-- {{ _todoArr }} -->
</template>

<script>
import { ref } from "vue";
import CompHeader from "./components/CompHeader.vue";
import CompAddForm from "./components/CompAddForm.vue";
import CompLi from "./components/CompLi.vue";

export default {
  name: "App",
  components: { CompHeader, CompAddForm, CompLi },

  setup() {
    //3에서 새로 나온거

    const _todoArr = ref([]);
    const _setTodoArr = (emitData) => {
      //v를 적는 이유는 꺼내서 쓰겠다는 뜻. 자식이 보내준 타이틀 값을 꺼내서 써준다는것
      _todoArr.value.push(emitData);
    };

    return {
      _todoArr, //자식이 프롭스를 받아서 고칠수없음 리액트와다름. 부모가 무조건 해결해야함. 사용자가입력한 값을 받아서 부모한테 줘야함. 근데 그값을 날리는 방법은 없고, 에밋이라는 이벤트를 전송하는 방법만 있음 컨텍스트가 필요하다! 부모가 나한테 쏘는건 프롭스 자식이 보내는건 컨텍스트
      _setTodoArr,
    };
  }, //setup은 컴포지션이다. 컴포지션 문법이다. 컴포지션 함수이다. 변수를 만들거나 함수를 만들수있음
};
</script>

<style>
/* @import "./css/style.css"; */
</style>
