<template>
  <div>
    <input v-model="num" @input="setNum($event.target.value)" type="text"><!-- 프롭스로 받은 변수는 브이모델 못씀 -->
  </div>
</template>
<script>
import { inject } from 'vue';

export default {
  setup(){

const {num, setNum} = inject('numProvide')
return{
  num, setNum
}
  }
}
</script>
<style>
  
</style>