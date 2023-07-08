<template lang="">
  <div>
    {{propsNum}}
    <input @input="$emit('InputTextEmit' , $event.target.value)" :value="propsNum" type="text"><!-- 부모한테 방출한다. 파람두가지받음. 커스텀이벤트라고 하는데  -->
  </div>
</template>
<script>

export default {
  emits:["InputTextEmit"],
  props:["propsNum"],
  setup() {

  }
}
</script>
<style>
  
</style>