<template >
  <h2>todo</h2>
  <div>
    <CompUl />
  </div>
</template>
<script>
import { provide, ref } from 'vue';
import CompUl from './CompUl.vue';

export default {
  setup() {
    const todoArr = ref([
      { title: '제목', desc: '1번 설명입니다' },
      { title: '제목', desc: '2번 설명입니다' },
      { title: '제목', desc: '3번 설명입니다' },
      { title: '제목', desc: '4번 설명입니다' },
    ])
    const setTodoArr = (newValue) => {
      todoArr.value = newValue
    }
    provide('todoArrProvide', { todoArr, setTodoArr })
    return {
      todoArr
    }
  },
  components: { CompUl }
}
</script>
<style lang="">
  
</style>