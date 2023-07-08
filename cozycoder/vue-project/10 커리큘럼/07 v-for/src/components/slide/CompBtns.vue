<template>
  <div>
    <button @click="setNum(idx)" v-for="idx in 5" :key="idx" >{{idx}}</button>
  </div>
</template>
<script>
export default {
  
}
</script>
<style>
  
</style>