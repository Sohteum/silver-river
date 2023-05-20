<template>
  <h2>To-do List</h2>
  <span v-if="toggle">true</span>
  <span v-else>false</span>
  <button @click="fnToggle">toggle</button>

  <AddFormVue @add-todo="sendEmit" /><!-- 자식한테받았을때 -->
  <TodoList @emit-idx="todoArr" /><!-- 보낼때 -->

  <p v-if="!todoArr.length">등록된 일정이 존재하지 않습니다.</p>
  <!--  v-if=""이런애들. :id 이런애들 발견하면 무조건 스크립트 문법임 -->
  <!-- "!todoArr.length"0이라면, 0은 false니까 앞에 느낌표만 하나 붙이면 됨 -->
</template>

<script>
/* eslint-disable */
//워닝이 너무 많이 뜰때 사용가능함!
import { ref } from 'vue';
import AddFormVue from './components/AddForm.vue';
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: { AddFormVue, TodoList },

  setup() {
    const toggle = ref(false);
    const todoArr = ref([]);
    const todoStyle = {
      textDecoration: 'line-through',
      color: 'gray',
    };
    const fnDelete = function (index) {
      /* 여기에 인덱스 쓸거니까 넣어줘야함 */
      todoArr.value.splice(index, 1); /* 리액트는 새로운 배열로 교체를 해줘야하는데, 완전히 다른사람이되어야 갱신이됨. 하지만 여기는 밥먹고와도 갱신*/
    };

    const fnToggle = function () {
      toggle.value = !toggle.value;
    };

    const fnAddTodo = function (sendEmit) {};

    return {
      todoArr,
      toggle,
      fnToggle,
      todoStyle,
      fnDelete,
      fnAddTodo,
    };
  },
};
</script>

<style></style>
