<template>
  <h1>v-model과 form요소</h1>
  <p>v-model은 들어오는 타입에 따라서 어떤 값이 출력되는지 달라짐</p>
  <input v-model="str" type="text">
  <p>입력된내용 : {{ str }}</p>
  <hr>
  <form action="">
    <p><!-- 여기는 value값 -->
      <input v-model="gender" type="radio" name="gender" value="남자">남
      <input v-model="gender" type="radio" name="gender" value="여자">여
    </p>
    <p>
      {{ gender }}를 선택했습니다.
    </p>
  </form>
  <hr><!-- 여기는 트루폴스값 체크박스가 조금 특이한 경우임 -->
  <input v-model="checked" type="checkbox">
  <p>체크여부 : {{ checked }}</p>

  <form action="">
    <p>
      <input   v-model="num1" type="number" min="0" max="9"><!-- 글자 들어가는건 무조건 인풋 -->
      <select  v-model="oper" name="" id="">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input   v-model="num2" type="number" min="0" max="9">
    </p>
    <p>결과 : <!-- {{oper==='+'? num + num2: num1-num2}} -->
      결과 : {{ fncal() }}<!--  -->
    </p>

  </form>
</template>

<script>
import { ref } from 'vue';



export default {
  setup() {
    const gender = ref('남자')//디폴트값으로 선택해줄수있음
    const checked = ref(false)
    const str = ref('')
    const num1 = ref(0)
    const num2 = ref(0)
    const oper = ref('+')
    const result = ref(0)
    const fncal = () => {
      const n1 = num1.value
      const n2 = num2.value
      let result
      if (oper.value === '+') {
        result = n1 + n2
      } else if (oper.value === '-') {
        result = n1 - n2
      } else if (oper.value === '*') {
        result = n1 * n2
      } else {
        result = n1 / n2
      }
      return result
    }
    return {
      gender,
      checked,
      str,
      num1,
      num2,
      oper,
      result,
      fncal,
    }
  }
}
</script>
