<template>
  <h2>To-do List</h2>
  <span v-if="toggle">true</span>
  <span v-else>false</span>
  <button @click="fnToggle">toggle</button>
  <form @submit.prevent="fnSubmitHandler">
    <input
      type="text"
      v-model="todo"
      placeholder="type new todo-list"
    />
    <button>click</button>
  </form>
  <p v-if="isErr">Error</p>
  <hr />
  <ul>
    <li
      v-for="v in todoArr"
      :key="v.id"
    >
      {{ v.subject }}
    </li>
  </ul>
</template>

<script>
/* eslint-disable */
//워닝이 너무 많이 뜰때 사용가능함!
import { ref } from 'vue';

export default {
  name: 'App',

  setup() {
    const toggle = ref(false);
    const isErr = ref(false);
    const todo = ref('');
    const todoArr = ref([
      { id: 1, subject: '휴대폰 사기' },
      { id: 2, subject: '공부하기' },
    ]);

    const fnSubmitHandler = function () {
      // e.preventDefault(); 위에서 .prevent로 모디파이어로 대체 사용 가능함
      isErr.value = !todo.value && true;
      // if (!todo.value) {
      //   isErr.value = true;
      // } else {
      //   isErr.value = false;
      // }
      if (isErr.value) return false;
      // isErr.value = (!todo.value)||false;
      todoArr.value.push({
        id: Date.now(),
        subject: todo.value,
      });
    };

    const fnToggle = function () {
      toggle.value = !toggle.value;
    };
    return {
      todo,
      fnSubmitHandler,
      todoArr,
      toggle,
      fnToggle,
      isErr,
    };
  },
};
</script>
