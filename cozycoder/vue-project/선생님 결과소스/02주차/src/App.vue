
<template>
  
  <h1>todo</h1>
  <span v-show="toggle===3">true</span>
  <span v-show="!toggle">false</span>
  <br>
  <span v-if="toggle===3">true</span>
  <span v-else>false</span>
  <br>
  <button @click="fnToggle">토글</button>
  <hr>
  <form @submit.prevent="fnSubmitHandler">
    <input type="text" v-model="todo" />
    <button>click</button>
  </form>

  <p v-if="isErr">Error</p>

  <hr>
  <ul>
    <li v-for="v in todoArr" :key="v.id"> 
      {{ v.subject }} 
    </li>
  </ul>
</template>

<script>
/*eslint-disable*/

import { ref } from "vue";

export default {
  name: "App",
  setup() {
    const toggle = ref(3)
    const isErr = ref(false)
    const todo = ref("");
    const todoArr = ref([
      {id:1, subject:'휴대폰사기'},
      {id:2, subject:'공부하기'},
    ]) 
    const fnSubmitHandler = (e) => {
      isErr.value = (!todo.value)&&true
      if(isErr.value) return false

      todoArr.value.push({
        id : Date.now(),
        subject : todo.value,
      })

    }; //fnSubmitHandler

    const fnToggle = () =>{
      toggle.value = !toggle.value
      console.log(toggle.value);
    }
    return {
      todo, fnSubmitHandler, todoArr,toggle,fnToggle,
      isErr
    };
  }, //setup
}; //export
</script>
