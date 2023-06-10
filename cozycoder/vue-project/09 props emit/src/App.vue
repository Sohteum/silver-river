<template>
<CompNumbersUl :refArr="refArr"/>
<CompBtnsUl :refArr="refArr" @sendEmit="fnSetRefArr"/>
app

</template>

<script>
/* eslint-disable */

import { ref } from 'vue';//리액티브 설정. 반응형 변수 설정.이게 useState
import CompNumbersUl from './compNumbers/CompNumbersUl.vue';
import CompBtnsUl from './compBtns/CompBtnsUl.vue';

export default {
  
  name: "App",
  props: ['refArr'],
    setup() {
        const refArr = ref([
          {n:0, className:'de-active'},
          {n:1, className:'de-active'},
          {n:2, className:'de-active'},
        ]);
        const fnSetRefArr=(n)=>{
          refArr.value[n].className='active'
        }
        return {
          refArr,
          fnSetRefArr
        };
    },
    components: { CompNumbersUl },
    components: { CompBtnsUl}
}
</script>

<style>
li.active{
  color:red;
}</style>
