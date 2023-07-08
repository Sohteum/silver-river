<template>
  <form>

    <p>제목 : {{ data.title }}</p>
    <p>설명 : {{ data.desc }}</p>
    <p><button @click="todoArr.splice(0)">삭제</button></p>
  </form>
</template>
<script>
import { inject } from 'vue';


export default {
  props: ['idx', 'data'],
  setup() {
    const { todoArr, setTodoArr } = inject('todoArrProvide')
    const fnSetTodoArr = () => {
      let arr = [...todoArr.value]
      arr.splice(props, idx, 1)
      setTodoArr(arr)
    }
    return {
      fnSetTodoArr,
    }
  }
}
</script>

<style></style>