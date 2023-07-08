<template>
  <h1>v-if(복잡한건 사용 이걸 더 선호), v-show(display none, 가벼운거에 많이 사용)</h1>
  <hr>
  <section>
    <img v-if="n === 1" src="@/img/img1.jpg" alt="">
    <img v-if="n === 2" src="@/img/img2.jpg" alt="">
    <img v-if="n === 3" src="@/img/img3.jpg" alt="">
    <br>
    <img :src="require(`@/img/img${n}.jpg`)" alt="">


    <p>
      <button @click="n = 1">1</button><!-- 버튼에는 브이모델 적용 못해 -->
      <button @click="n = 2">2</button><!-- 클릭할때마다 버튼의 n을 바꿔주면 됨 -->
      <button @click="n = 3">3</button>
    </p>
    <hr>
    <form @submit.prevent="fnsubmit">
      <input v-model="text" type="text">
      <p v-if="isErr">내용을 추가하고 입력하세요</p>
      <p>{{ arr }}</p>
    </form><!-- 푸시를 이용해서 내용을 입력하고 빵하면 아래에 출력되게 하기 -->
  </section>
  <!-- <section>
    <img v-show="n===1" src="@/img/img1.jpg" alt="">
    <img v-show="n===2" src="@/img/img2.jpg" alt="">
    <img v-show="n===3" src="@/img/img3.jpg" alt="">
  </section> -->
</template>

<script>
import { ref } from 'vue';


export default {
  setup() {
    const n = ref(1)
    const arr = ref([])
    const text = ref('')
    const isErr = ref(false)
    const fnsubmit = () => {
      if (text.value) {
        isErr.value = false
        arr.value.push(text.value)
      } else {
        isErr.value = true
      }
    }
    return {
      n,
      arr,
      isErr,
      fnsubmit,
      text,
    }
  }

}

</script>

<style></style>