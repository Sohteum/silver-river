<template>
  <CompHeader />

  <CompAddForm @emitAddListHandler="_setTodoArr" />

  <ul>
    <CompLi 
      v-for="(v,i) in _todoArr" 
      :key="v.id" 
      :data="v"  
      :idx="i"  
      :fnCompleted="_setTodoArrCompleted"
      :fnDeleteTodoArrList="_setDeleteTodoArrList"
    />
  </ul>


  <hr>
  {{ _todoArr }}
</template>

<script>
import { ref } from 'vue'
import CompHeader from './components/CompHeader.vue'
import CompAddForm from './components/CompAddForm.vue'
import CompLi from './components/CompLi.vue'

export default {
  components: { CompHeader, CompAddForm, CompLi },

  setup() {
    const _todoArr = ref([])
    const _setTodoArr = (emitData) => {
      _todoArr.value.push(emitData)
    }

    const _setTodoArrCompleted = (idx, boolean) => {
      _todoArr.value[idx].completed = boolean
    }

    const _setDeleteTodoArrList = (i) => {
      _todoArr.value.splice(i,1)
    }
    
    return {
      _todoArr,
      _setTodoArr,_setTodoArrCompleted,_setDeleteTodoArrList
    }
  }//setup
}
</script>
<style>
@import './css/style.css';
</style>
