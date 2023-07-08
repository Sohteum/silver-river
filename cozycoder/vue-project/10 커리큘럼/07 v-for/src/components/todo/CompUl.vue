<template>
  <div>
    <h2>CompLi  </h2>
    <CompLi v-for="(data,idx) in todoArr" :key="idx" :idx="idx" :data="data" />
  </div>
</template>
<script>
import { inject } from 'vue';
import CompLi from './CompLi.vue';

export default {
  setup() {
    const { todoArr } = inject('todoArr, setTodoArr')
    return {
      todoArr
    }
  },
  components: { CompLi }
}
</script>
<style></style>