<template lang="">
    <div>
        <button @click="$emit('sendEmit', v.n)" >버튼{{v.n}}</button>
    </div>
</template>
<script>
export default {
    props:['v'],
    emits:['sendEmit'],
    setup(){

    },
    
}
</script>
<style lang="">
    
</style>