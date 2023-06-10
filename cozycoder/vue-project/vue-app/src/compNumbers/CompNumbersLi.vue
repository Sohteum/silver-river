<template lang="">
    <li :class="v.className">
        {{v.n}}
    </li>
</template>
<script>
import { inject } from 'vue';

export default {
    props: ['v'],
    setup(){
        return{

        }
    }
}
</script>
<style lang="">
    
</style>