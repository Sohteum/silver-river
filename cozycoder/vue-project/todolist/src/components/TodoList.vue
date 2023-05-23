<template>
  <ul>
    <li
      v-for="(v, index) in todoArr"
      :key="v.id"
    >
      <input
        :id="v.id"
        v-model="v.completed"
        type="checkbox"
      /><!-- v-model에 아래 트루폴스에따라 체크박스가 달라짐 -->
      <label
        :for="v.id"
        :style="v.completed ? todoStyle : ''"
        :class="v.completed ? 'disable' : ''"
        ><!-- 포랑 아이디 맞춰주면 글자 클릭해도 체크박스체크가능 -->
        <!-- 여기서 :style="v.completed ? todoStyle : {}" 이것도 가능-->
        <!-- :class="{ disable: v.completed }" -->
        {{ v.subject }}</label
      >
      <button @click="fnDelete(index)">delete</button>
    </li>
  </ul>
</template>

<script>
import { isContext } from 'vue';

export default {
  props: {
    todoArr: {
      type: Array,
      required: true,
      // props: ['todoArr'],
    },
    setup() {
      const fnDelete = (index) => {
        console.log(index);
        isContext.emit('emit', index){

        }
      };
      return {
        fnDelete,
      };
    },
  },
};
</script>

<style></style>
