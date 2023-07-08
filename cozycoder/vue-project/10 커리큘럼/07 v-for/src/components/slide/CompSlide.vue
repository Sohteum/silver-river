<template>
  <div>


  </div>
</template>
<script>
import CompImage from './CompImage.vue';
import CompBtns from './CompBtns.vue';
import { provide, ref } from 'vue';
export default {
  setup() {
    const num = ref(1)
    const setNum =(newValue)=>{
      num.value = newValue
    }
    provide('numProvide', (num, setNum))
  },
  components: { CompImage, CompBtns }

}
</script>
<style></style>