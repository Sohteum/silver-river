<template lang="">
  <div>
    <h2>comp1</h2>
    <p>onmount를 이용한 setInterval구현</p>
    <p>num:{{num}}</p>
    <p><button @Click="setComp1(false)">Comp1사라지기</button></p>
  </div>
</template>
<script>
import { inject, onMounted, onUnmounted, ref } from 'vue';

export default {
  setup() {
    const num = ref(0)
    const { setComp1 } = inject('comp1Provide')
    let id
    onMounted(() => {
      id = setInterval(() => {
        num.value++
        // console.log(num.value);
      }, 1000)
    })

    onUnmounted(() => {
      clearInterval(id)
    })
    return {
      num, setComp1
    }
  }
}
</script>
<style lang="">
  
</style>