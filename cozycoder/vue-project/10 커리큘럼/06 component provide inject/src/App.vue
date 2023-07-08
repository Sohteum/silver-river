<template>
  <h1>component 스테이트 관리(provide, inject)</h1><!-- react context -->
  <CompForm />
  <hr>
  <CompInput />
</template>

<script>
import CompForm from '@/components/CompForm.vue';
import CompInput from '@/components/CompInput.vue';
import { provide, ref } from 'vue';

export default {
  setup() {
    const num = ref('1')
    const setNum = (newValue) => {
      num.value = newValue
    }

    provide('numProvide', { num, setNum })
  },
  components: { CompForm, CompInput }

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