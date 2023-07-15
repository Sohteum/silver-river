<template lang="">
  <hr>
  <div>
    <h2>list</h2>
   <p> <input v-model="keyword" type="text"></p>
    <ul>
      <li v-for="v in outputArr" :key="v.id">{{v.title}}</li>
    </ul>
  </div>
</template>
<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const arr = ref([
      { id: 1, title: 'c2' },
      { id: 2, title: 'c1' },
      { id: 3, title: 'b2' },
      { id: 4, title: 'b1' },
      { id: 5, title: 'a2' },
      { id: 6, title: 'a1' },
    ])
    const keyword = ref('')
    const outputArr = computed(() => {
      return arr.value.filter((v) => v.title.includes(keyword.value)) //제목.포함(검색어)
    })
    return {
      arr, outputArr, keyword
    }
  }
}
</script>
<style lang="">
  
</style>