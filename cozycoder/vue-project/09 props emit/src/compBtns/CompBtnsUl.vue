<template lang="">
    <div>
        <CompBtnsLi v-for="v in refAff" :key="v" :v="v" @sendEmit="fnSendEmit"/>
    </div>
</template>
<script>
import CompBtnsLi from './CompBtnsLi.vue'
export default {
  props: ['refArr'],
  components: { CompBtnsLi },

  setup(context,props) {
    const fnSendEmit = (n) => {
      context.emit('sendEmit', n)
    }

    return {
      fnSendEmit,
    }
  },
}
</script>

<style lang="">
    
</style>