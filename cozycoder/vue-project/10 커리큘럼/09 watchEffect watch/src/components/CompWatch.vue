<template lang="">
  <div>
    <h2>watch</h2>
    <p>
      <button @click="num = parseInt($event.target.value)" v-for="i in 5" :key="i" :value="i">{{i}}</button>
    </p>
    <p>
num:{{num}}, 결과 :{{result}}
    </p>
  </div>
  <hr>
  <h2>watch2</h2>
  <hr>
  <p>{{output}}</p>
</template>
<script>
import { ref, watch } from 'vue';

export default {
  setup() {
    /* ex1 */
    const num = ref(1)
    const result = ref('초기값')
    watch(num, (current, prev) => {
      result.value = (current > prev) ? '증가' : '감소'
    }) //파라미터 두개를 받음. 하나는 값, 두번째는 함수 그러니까 이것도 하이오더펑션//같은값을 눌렀을때는 변화가 없으니까 찾을 수 없음
    /* ex1 */
    const output = ref('스크롤변화없음')
    const scrY = ref(window.scrollY)
    window.addEventListener('scroll', () => {
      scrY.value = window.scrollY
    })//addeventlistner도 어찌보면 하이오더 펑션
    watch(scrY, (c, p) => {//이전값과 과거값을 비교할 수 있음
      output.value = (c > p) ? '스크롤증가' : '스크롤감소'
    })
    return {
      num, result, output
    }
  }
}
</script>
<style lang="">
  
</style>