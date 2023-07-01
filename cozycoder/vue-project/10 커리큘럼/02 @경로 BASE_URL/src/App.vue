<template>
  <h1>경로</h1>
  <hr>
  <p>1. src폴더 이미지 불러오기</p>
  <img src="@/src-img/img1.jpg" alt=""><!-- 상대경로 아닌 절대경로로 바꿔줄때는 @사용 -->
  <p>2. src폴더의 이미지를 변수 이용해서 불러오기</p>  
  <img  :src="require(`@/src-img/img${n}.jpg`)" alt=""><!-- 변수를 넣어야할때는 require사용해야함 -->
  <p>3. public폴더의 이미지 불러오기</p>
  <img :src="`${baseUrl}img/img${n}.jpg`" alt=""><!-- 여기서는 함수를 불러오는 방식으로 사용해야함. 그리고 얘는 리콰이어 안해도 됨 -->

</template>

<script>
import { ref } from 'vue';
import '@/src-css/bg.css'; //css임폴트하기 @가 src라는 의미


export default {
  setup() {
    const n = ref(2)
    const baseUrl = process.env.BASE_URL
    return {
      n,
      baseUrl,
    }
  }
}
</script>

<style>
@import url('@/src-css/color.css');/* src-css임폴트 두번째 방법 */
</style>