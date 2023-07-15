<template lang="">
  <main>
    <h3>detail</h3>
    <p>제목:{{title}}</p>
  </main>
</template>
<script>
import {inject} from 'vue';
import { useRoute, useRouter} from 'vue-router';
export default {
  setup() {
    const route = useRoute()
    const router = useRouter()
    const id = parseInt(route.params.id)
    const {arr, setArr} = inject('arrProvide')
    const title = arr.value[id-1].title
    console.log(title);
    if(arr.value[id-1]){
    }else{
      
      router.push('/404')
    }
    return {
      title,
    }
  }
}
</script>
<style lang="">
  
</style>