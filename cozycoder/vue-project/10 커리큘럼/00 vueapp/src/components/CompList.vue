<template lang="">
  <main>
    <h3>list</h3>
    <ul>
      <li v-for="v in arr" :key="v.id">
        <!-- <router-link :to="/detail/`${v.id}`">{{v.title}}</router-link> -->
        <router-link :to="{name:'CompDetail', params:{id:v.id}}">{{v.title}}</router-link>
      </li>
    </ul>
  </main>
</template>
<script>
import { inject } from "vue";
export default {
  setup() {
    const { arr } = inject('arrProvide')
    return {
      arr
    }
  }
}
</script>
<style lang="">
  
</style>