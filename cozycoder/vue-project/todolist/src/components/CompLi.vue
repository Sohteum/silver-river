<template>
  <li>
    <label for="data.id">
      <input id="data.id" v-model="data.completed" type="checkbox" />
      완료
    </label>
    <p class="">{{ data.title }}</p>
  </li>
</template>

<script>
/* eslint-disable */
/* 뷰는 사용하지 않는 변수등에 대해 에러를 바로 내보내기때문에 위에 이걸 작성해주면 에러가 안남 */
export default {
  props: ["data"], //문자열로 받아야함
  setup(props) {
    return {};
  },
};
</script>

<style></style>
