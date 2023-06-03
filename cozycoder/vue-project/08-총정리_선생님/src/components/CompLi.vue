<template>
  <li :class="data.completed &&'active'">
    <label :for="data.id">
      <input :id="data.id" type="checkbox" @change="fnCompleted(idx, $event.target.checked)"><!-- v-model="data.completed" -->
      완료 {{ _chk }}
    </label>
    <p class="">{{ data.title }}</p>
    <p><button @click="fnDeleteTodoArrList(idx)">삭제</button></p>
  </li>
</template>

<script>
export default {
  props: ['data', 'idx', 'fnCompleted','fnDeleteTodoArrList'],
  setup() {
    return {

    }
  }
}
</script>

<style>
  li.active{
    opacity: 0.3;
  }
</style>