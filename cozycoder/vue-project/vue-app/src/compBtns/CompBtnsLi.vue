<template lang="">
    <div>
        <button @click='fnSetArrHandler'>버튼{{v.n}}</button>
    </div>
</template>
<script>
import { inject } from 'vue'

export default {
    props: ['v'],

    setup() {
        const { refArr, setRefArr } = inject('provideArr')

        const fnSetArrHandler=(n)=>{
           const copyArr = [...refArr.value]
           copyArr[n].className='active'
        }
        return {
            fnSetArrHandler
        }
    },

}
</script>
<style lang="">
    
</style>