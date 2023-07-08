<template>
  <h1>component 스테이트 관리(props, emit)</h1>
  <hr>
  <CompForm :propsNum="num" @formEmit="fnSetNum" /> <!-- 넘 프롭스 내려주는 방법 -->
  <hr>
  <CompInput :propsNum="num" @compInput="fnSetNum()" />
</template>

<script>
import CompForm from '@/components/compForm.vue';
import CompInput from '@/components/compInput.vue';
import { ref } from 'vue';

export default {
  setup() {
    const num = ref("1")
    const fnSetNum = (sendedValue) => {
      num.value = sendedValue
    }
    return {
      num,
      fnSetNum,
    }
  },
  components: { CompForm, CompInput },

}
</script>


<style>
* {
  font-size: 1em;
}

button.active {
  color: red;
}
</style>