<template lang="">
  <h2>comp2</h2>
  <p>onUpdated를 이용한 setTimeOut구현</p>
  <p>num:{{num}}</p>
<button class='btn'>1증가</button>

</template>
<script>
import { onMounted, onUpdated, ref } from 'vue';

export default {
  setup() {
    const num = ref(0)
    onMounted(() => {
      document.querySelector('.btn').addEventListener('click', function () {
        num.value = true

        // num.value = 3  이걸 3으로 바꾸면 바꿀때 한 번 실행되는거. 3으로 지금 할건 아니고....
      })//click
    })//onMounted

    onUpdated(() => {//화면이 바뀔때 단 한 번 실행되는걸 해줘야함. 그러니까 셋타임아웃 이런거 할수 없는거지.
      setTimeout(() => {
        num.value++
      }, 1000)
    })
    return {
      num,
    }
  }
}
</script>
<style lang="">
  
</style>