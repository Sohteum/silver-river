<template>
  <h1 class="title">Vue{{ name }}</h1>
  <hr />
  <p>{{obj.id}} {{obj.name}}</p>
  <hr>
  <button v-on:click="fnClickHandler('개똥이')" class="btn">Click</button>
</template>

<script>
//reactive -> arr, object , ref -> numeric, string
import { reactive, ref } from "vue";

export default {
  name: "App",
  setup() {
    //composition
    const name = ref(1); //const  name =`Vue App`
    const obj = reactive({
      id:1, 
      name:'홍길동',  
    })
    const fnClickHandler = (e,param) => {
      name.value ++  ; //name = 'Vue Study'
      obj.id = 2
      obj.name = param
    };
    return {
      name,
      fnClickHandler,
      obj,
    }; //return
  }, //setup composition
};
</script>

<style>
.title {
  font-size: 20px;
}
</style>
