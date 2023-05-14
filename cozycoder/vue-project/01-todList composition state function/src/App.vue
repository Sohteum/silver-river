<template>
  <h1 class="title">{{name}}</h1>
  <p>{{fn('Vue')}}</p>
</template>

<script>
export default {
  name: 'App',
  setup(){//composition
    const name = "Vue App"
    const fn = (param) => {
      return `Hello ${param}`
    }
    return{
      name,
      fn,
    }
  }
}
</script>

<style>
  .title{
    font-size: 20px;
  }
</style>
