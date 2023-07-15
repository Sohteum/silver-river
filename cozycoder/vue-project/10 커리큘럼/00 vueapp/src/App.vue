<template>
  app
  <CompNav />
</template>

<script>
import { provide, ref } from 'vue';
import CompNav from './components/CompNav.vue';
export default {
  name: 'App',
  setup() {
    const arr = ref([
      { id: 1, title: 'title1' },
      { id: 2, title: 'title2' },
      { id: 3, title: 'title3' },
    ])
    const setArr = (newValue) => {
      arr.value = newValue
    }
    provide('arrProvide', {arr, setArr})
  },
  components: { CompNav }
}
</script>

<style>
a.router-link {
  color: blue;
}
</style>