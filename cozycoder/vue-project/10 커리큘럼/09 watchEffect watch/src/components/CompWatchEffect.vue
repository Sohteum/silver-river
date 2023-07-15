<template lang="">
  <h2>watchEffect</h2>
  <div v-if="!user">
    <p>로그인전 <button @click="user=true">로그인</button></p>
    <p>비회원페이지</p>
</div>
<div v-if="user">
  <p>로그인후 <button @click="user=false">로그아웃</button></p>
  <p>
    id:{{id}}
    이름 :{{user}}
    email:{{email}}

  </p>
</div>

</template>
<script>
import { ref, watchEffect } from 'vue';

export default {
  setup() {
    const user = ref(false)
    const id = ref(' ')
    const name = ref(' ')
    const email = ref('  ')
    watchEffect(() => {//state를 백개든 이백개든 적을 수 있음 이중에 하나라도 동작하면 얘는 변함
      if (user.value) {
        id.value = 'userid'
        name.value = 'gildong'
        email.value = 'a@a.net'
        setTimeout(() => {
          user.value = false
        }, 3000)
      } else {
        id.value = " "
        name.value = " "
        email.value = " "
      }
    })
    return {
      id, name, email, user
    }
  }
}
</script>
<style lang="">
  
</style>