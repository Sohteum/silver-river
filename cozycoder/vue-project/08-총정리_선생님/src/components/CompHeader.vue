<template>
  <header>
    <h1>
      <img :src="`${baseURL}img/logo.png`" alt="">
      <!-- <img :src="require('../img/logo.png')" alt=""> -->
      <span>todoApp</span>
    </h1>
  </header>
  <hr>
</template>

<script>
import { ref } from 'vue'


export default {
  setup(){
    const baseURL = ref(process.env.BASE_URL)
    return {
      baseURL,
    }
  }
  
}
</script>

<style></style>