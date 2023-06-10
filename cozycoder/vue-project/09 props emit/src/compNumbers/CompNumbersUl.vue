<template lang="">
    <ul>
<CompNumbersLi v-for="v in refArr" :key="v" :v="v"/>
    </ul>
</template>
<script>
import CompNumbersLi from './CompNumbersLi.vue';

export default {
    props: ['refArr'],
    setup() {

        return {

        }
    },
    components: { CompNumbersLi }

}
</script>
<style lang="">
    
</style>