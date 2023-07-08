<template>
  <form>
    <h2>comp form</h2>
    <CompBtns :propsNum="propsNum" @btnEmit="fnSendEmit" />
  </form>
</template>
<script>
import CompBtns from '@/components/CompBtns.vue';
export default {
  props: ['propsNum'],
  setup(props, {emit}) {
    const fnSendEmit = () => {
      emit('formEmit')
    }
    return {
      fnSendEmit,

    }
  },
  components: { CompBtns },

}
</script>
<style></style>