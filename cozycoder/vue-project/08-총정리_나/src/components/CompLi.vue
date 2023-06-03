<template>
  <li :class="data.completed && 'active'">
    <label for="data.id">
      <input id="data.id" @change="fnCompleted(idx, $event.target.checked)" type="checkbox" />
      완료{{ _chk }}
      <!-- 부모가 내려준거라서 수정을 못함. 그래서 함수를 만들어서 수정을 할수있게 만들어주면 됨 -->
    </label>
    <p class="">{{ data.title }}</p>
    <p><button @click="fnDeleteTodoArrList(idx)">삭제</button></p>
  </li>
</template>

<script>
/* eslint-disable */
/* 뷰는 사용하지 않는 변수등에 대해 에러를 바로 내보내기때문에 위에 이걸 작성해주면 에러가 안남 */
export default {
  props: ["data", "idx", "fnCompleted", 'fnDeleteTodoArrList'], //문자열로 받아야함
  setup(props, context) {
    const fnSetCompleted = (e) => { };

    return {
      fnSetCompleted,
    };
  },
};
</script>

<style>
li.active {
  opacity: 0.3;
}
</style>
