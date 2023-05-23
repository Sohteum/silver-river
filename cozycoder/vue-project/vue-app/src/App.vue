<template>
  <figure>
    <img
      v-show="n === v"
      v-for="v in imgArr"
      :src="require(`@/img/img${v}.jpg`)"
      :key="v"
      alt=""
    />
  </figure>
  <button
    @click="fn(n)"
    v-for="v in imgArr"
    :key="v"
  >
    {{ v }}
  </button>
  <hr />
  <figure>
    <!-- v-for와 v-if는 사용할 수 없음 경고창뜸 -->
    <img
      v-show="n === v"
      v-for="v in imgArr"
      :src="require(`@/img/img${v}.jpg`)"
      :key="v"
      alt=""
    />
  </figure>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',

  setup() {
    const fn = (param) => {
      n.value = param;
    };
    const imgArr = ref([1, 2, 3, 4, 5]);
    const n = 1;
    return {
      imgArr,
      n,
      fn,
    };
  },
};
</script>
