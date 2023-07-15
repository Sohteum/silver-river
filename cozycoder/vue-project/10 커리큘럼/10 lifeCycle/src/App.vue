<template>
  <!-- 
    parsing은 부모부터 시작이 됨.위에서 아래로//변수나 함수를 읽어내리는거
    끝나면 돔을 만든다. 그건 자식순. 돔의 구축은 자식으로 부모순으로 만들어짐//돔구축하는거
    그개념과 같은 개념임.

    생명주기 : 
    - parsing : 부모>자식
    - dom구축 : 자식>부모

    react hooks에서는 세가지로 
    useEffect(()=>{},[])  //돔 구축이 끝난 딱 한번

    in vue,
    onMounted() : useEffect(()=>{},[])
    onUpdated() : useEffect(()=>{},[num]) num이 바뀔때마다, 여기는 하나만 바뀔때마다업뎃이된다구??????????


    onUnmounted() :  죽을때(사라질때) : useEffect(()=>{return(()=>{여기 안에 들어오는게 죽을때할일})},[])
   -->
  <CompOne v-if="CompOne = true" />
  <hr>
  <CompTwo />
</template>

<script>
import CompOne from '@/components/CompOne.vue'
import CompTwo from '@/components/CompTwo.vue'
import { provide, ref } from 'vue'

export default {
  setup() {
    const Comp1 = ref(true)
    const setComp1 = (newValue) => {
      CompOne.value = newValue
    }
    provide('comp1Provide', { Comp1, setComp1 })
    return {
      CompOne
    }
  },

  components: { CompOne, CompTwo }
}
</script>
