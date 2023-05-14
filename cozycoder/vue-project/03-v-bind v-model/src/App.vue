<template>
  <h1 class="title">{{ name }}</h1>
  <hr />
  <p>{{obj.id}} {{obj.name}}</p>
  <hr>
  <input :type="type" v-bind:value="name">
  <hr>
  <button @click="fnClickHandler($event)" class="btn">Click</button>
</template>

<script>
//reactive -> arr, object , ref -> numeric, string
import { reactive, ref } from "vue";

export default {
  name: "App",
  setup() {
    //composition
    const name = ref('vue'); //const  name =`Vue App`
    const type = ref('text')
    const obj = reactive({
      id:1, 
      name:'홍길동',  
    })
    const fnClickHandler = (e) => {
      name.value = 'app'  ; //name = 'Vue Study'
      type.value = 'number'
      obj.id = 2
      console.log(e.target);
    };
    return {
      name,
      fnClickHandler,
      obj,
      type,
    }; //return
  }, //setup composition
};
</script>

<style>
.title {
  font-size: 20px;
}
</style>
