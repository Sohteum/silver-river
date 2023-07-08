<template>
  <h2>v-for</h2>
  <hr>
  <CompSlide />
  <hr>
  <CompTodo />
</template>

<script>
import CompSlide from './components/slide/CompSlider.vue';
import CompTodo from './components/todo/CompTodo.vue';
export default {
  name: 'App',
  components: { CompSlide, CompTodo }
}
</script>

<style>
*{
  font-size: 1rem;

}


</style>
