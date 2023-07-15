<template lang="">
  <div>
    <h2>Calc</h2>
    <!--  ref를 이용한 변경방식
    <input @input="fnCalc" comp v-model="num1" type="number" min="0" max="9">
    &nbsp;
    <input @input="fnCalc" comp v-model="num2" type="number" min="0" max="9">
  -->

  <!-- computed를 이용한 변경방식 -->
  <input   comp v-model="num1" type="number" min="0" max="9">
  &nbsp;
  <input   comp v-model="num2" type="number" min="0" max="9">


    <P>
      더하기 : {{sum}},<br>
      빼기: {{sub}},<br>
      곱하기: {{multi}},<br>
      나누기: {{div}},<br>
    </P>


  </div>
</template>
<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const num1 = ref(0)
    const num2 = ref(0)

    /*  ref를 이용한 방식
    const sum = ref(0)
     const fnCalc = () => {
       sum.value = num1.value + num2.value
     } */

    //computed를 이용한 방식
    const sum = computed(() => num1.value + num2.value//반드시 ref이용한거 리턴
    ) //함수를 함수로 쌀수있는 하이오더펑션방식
    const sub = computed(() => num1.value - num2.value)
    const multi = computed(() => num1.value * num2.value)
    const div = computed(() => num1.value / num2.value)


    return {
      num1, num2, sum, sub, multi, div
      /* fnCalc
      , sum */
    }
  }

}
</script>
<style lang="">
  
</style>