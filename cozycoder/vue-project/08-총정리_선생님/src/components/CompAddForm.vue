<template>
  <form @submit.prevent="fnAddListHandler">
    <input ref="_refInput" v-model="_title" type="text" />
    <button>일정추가</button>
  </form>
  <hr>
</template>

<script>
import { ref } from 'vue'
export default {
  setup(props, context) {
    const _refInput = ref(null)
    const _title = ref('')
    const fnAddListHandler = () => {
      const data = {
        id : Date.now(),
        title : _title.value,
        completed : false,
      }
      context.emit('emitAddListHandler', data) 
      _title.value = ''
      _refInput.value.focus()
    }
    return {
      _title,
      fnAddListHandler,
      _refInput,
    }
  }
}
</script>

<style></style>