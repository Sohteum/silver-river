<template>
  <div class="name">
    {{ name }}
  </div>
  <input
    v-bind:type="type"
    v-bind:value="name"
  />
  <button
    class="btn btn-primary"
    v-on:click="updateName"
  >
    Click
  </button>

  <!--   <div>Hi</div> 감싸주지 않아도 된다면서 밑줄은 왜뜸? -->
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const name = ref('ddodomi');
    const type = ref('text');

    // const greeting = (name) => {
    //   return 'Hello, ' + name;
    // };

    // const greet = greeting(name);

    const updateName = () => {
      name.value = 'sohteum';
      console.log(name);
    };

    return {
      name,
      updateName,
      text,
      // greeting,
      // greet,
    };
  },
};
</script>

<style scoped>
.name {
  color: teal;
}
</style>
