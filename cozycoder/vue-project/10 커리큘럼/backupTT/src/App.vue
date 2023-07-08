<template>
  <h1>component 스테이트 관리(props, emit)</h1>
  <CompForm/>
  <hr>
  <CompInput/>
</template>

<script>
import CompForm from '@/components/CompForm.vue';
import CompInput from '@/components/CompInput.vue';

export default {
  components : {CompForm, CompInput}
  

}
</script>

<style>
*{
  font-size: 1em;
}
</style>