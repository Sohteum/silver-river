<template>
  <header>
    <h1>
      <img :src="`${baseURL}img/logo.png`" alt="" /><!-- :을 붙여서
      v-bind를 해줌 중괄호랑 똑같은거 -->
      <!--  <img
        :src="require('../img/logo.png')"
        alt=""
      /> --><!-- src폴더는 require로 찾으면 됨 -->
      <span>todoApp</span>
    </h1>
  </header>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const baseURL = ref(process.env.BASE_URL);
    //여기는 유즈스테잇=레프

    return {
      baseURL,
    };
  },
};
</script>

<style></style>
