<template lang="">
    <div>
        <CompBtnsLi v-for="v in refAff" :key="v" :v="v"/>
    </div>
</template>
<script>
import { inject } from 'vue';
import CompBtnsLi from './CompBtnsLi.vue'
export default {
  
  setup() {
    const {refArr, setRefArr} = inject('provideArr')
    return {
      refArr
    }
  },
  components: { CompBtnsLi },
}
</script>

<style lang="">
    
</style>