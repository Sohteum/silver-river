<template>
  <h1>vue {{ n }}</h1>
  <hr />
  <!-- 보간법, v-on, ref, eventlistner -->
  <button @click="fnIncrease(1)">증가</button>
  <button @click="fnIncrease(parseInt($event.target.innerText))">2</button>
  <!-- text를 꺼내서 집어넣고 싶다면? -->
  <button @click="fnIncrease(parseInt($event.target.innerText))">3</button>
  <hr />
  <!-- reactive -->
  홍길동 : {{ obj.홍길동 }}세 <br />
  아무개 : {{ obj.아무개 }}세 <br />
  <button
    value="홍길동"
    @click="fnAgeIncrease($event.target.value)"
  >
    홍길동나이증가
  </button>
  <button
    value="아무개"
    @click="fnAgeIncrease($event.target.value)"
  >
    아무개나이증가
  </button>
  <hr />
  <!-- v-bind -->
  <button
    id="btn"
    :class="className"
    @click="fnChangeClass"
  >
    v-bind
  </button>
  <hr />
  <!-- v-model -->
  <input
    type="text"
    v-model="str"
  /><!-- 인풋값이 바뀔때 알아서 바꿔줌. -->
  <p>p태그{{ str }}</p>
</template>

<script>
import { reactive, ref } from 'vue';

export default {
  name: 'App',

  setup() {
    const n = ref(1);
    const fnIncrease = function (add = 2) {
      n.value += add;
    };

    const obj = reactive({
      홍길동: 24,
      아무개: 13,
    });
    /* 배열변수. 참조형...?이게 변수를만드는거자나 */

    const fnAgeIncrease = function (name) {
      obj[name]++;
      // obj.name ++  객체에서 키값을 변수로 찾고싶을때는 대괄호로 찾아야함
    };
    /* ------------------------------------------- */

    const className = ref('active');

    const fnChangeClass = function () {
      className.value = className.value === '' ? 'active' : '';
      className.value = !className.value ? 'active' : '';
      className.value = className.value ? '' : 'active';
    };

    /* --------------------------------------------- */
    const str = ref('');

    /*   뷰에서는 굳이 이런거 안해도 됨
  const fnInputHandler = function (value) {
      str.value = value;
    }; 
    */

    return {
      n,
      fnIncrease,
      obj,
      fnAgeIncrease,
      className,
      fnChangeClass,
      str,
      // fnInputHandler,
    };
  },
};
</script>

<style>
#btn.active {
  color: red;
}
.p {
  display: inline-block;
}
</style>
