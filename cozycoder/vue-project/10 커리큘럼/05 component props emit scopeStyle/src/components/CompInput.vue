<template lang="">
  <div>
    <h2>compInput</h2>
    <!-- 받아서보내는 함수를 실행 -->
    <CompInputText :propsNum="propsNum" @InputTextEmit="fnSendEmit"/><!-- 커스텀이벤트 쓸때는 괄호 쓰면 안됨. 파람을 넣을 방법이 없다. 쓰면 에러 -->
  </div>
</template>
<script>
import CompInputText from '@/components/CompInputText.vue'

export default {
  emits:["compInput"],
  props:["propsNum"],
  setup(props, context){
    const fnSendEmit =(sendedValue)=>{
     context.emit('compInput',sendedValue)//emit은 두개의 파람을 넣게 되어있다 두번째는 아까 텍스트가 보낸거 그거를 받아서 이름은 마음대로
    }
    return{
        fnSendEmit,
      }
  },
  components:{CompInputText}
}
</script>
<style lang="">
  
</style>