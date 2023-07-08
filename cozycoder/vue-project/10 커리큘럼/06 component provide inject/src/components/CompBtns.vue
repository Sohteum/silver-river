<template>
  <div>
    <button @click.prevent="setNum('1')" :class="(num==='1')&&'active'" >1</button>
    <button @click.prevent="setNum('2')" :class="(num==='1')&&'active'" >2</button>
    <button @click.prevent="setNum('3')" :class="(num==='1')&&'active'" >3</button>
    <button @click.prevent="setNum('4')" :class="(num==='1')&&'active'" >4</button>
    <button @click.prevent="setNum('5')" :class="(num==='1')&&'active'" >5</button>
  </div>
</template>
<script>
import { inject } from 'vue';

export default {
  setup(){
    const {num,setNum} = inject('numProvide')
    return{
      num,
      setNum,

    }
  },
  
}
</script>
<style>
  
</style>