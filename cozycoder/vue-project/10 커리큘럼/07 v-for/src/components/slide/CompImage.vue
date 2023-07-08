<template>
  <figure>
    <img v-show="num ===3" v-for="idx in 5" :key="idx" :src="`require(@/img/img${idx}.jpg)`" alt=""><!-- 여기서는 쇼만 가능 이프는 못써-->
  </figure>
</template>
<script>
import { inject } from 'vue';

export default {
setup(){
  const {num} = inject('numProvide')
  return{
    num
  }
}}
</script>
<style></style>