<template>
  <input
    v-model="val"
    type="text"
  /><!-- 리액트에서는 밸류주고 펑션줘서 만들었자나 여기선 브이모델로 한방에 해결 -->
  <button @click="fnAdd()">추가하기</button
  ><!-- v-on의 약어 -->
  <p v-if="isErr">내용을 입력해 주세요!</p>
  <!-- v-if="isErr===true"> 이런식으로도 적을 수 있음-->
  <!-- 2way if는 객체 자체가 마운트가 안됨. 태그가 생성안되는거, show는 css로 보여줬다가 안보여줬다가함 -->
  <hr />
  <p
    v-for="v in arr"
    :key="v"
  >
    <!-- v-bind의 약어 -->
    {{ v.output }}
    <!-- 이렇게 보간으로 해야 아래 배열얀에  나옴  그리고 객체로 넣어줄때는 v.outout이렇게 해야징-->
  </p>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'App',

  setup() {
    const isErr = ref(false);
    const val = ref('');
    const arr = ref([
      { key: 1, output: '안녕하세요' },
      { key: 2, output: 'vue3입니다' },
    ]);
    const fnAdd = () => {
      arr.value.push({ key: Date.now(), output: val.value });
      if (!val.value) {
        isErr.value = true;
      } else {
        isErr.value = false;
      }
      val.value = ''; /* 이게 이미 비어있으니까 위치가 여기여야하는것. */
    };

    return {
      arr,
      fnAdd,
      val,
      isErr,
    };
  },
};
</script>
