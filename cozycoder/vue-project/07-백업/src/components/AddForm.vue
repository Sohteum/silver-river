<template>
  <form @submit.prevent="fnSubmitHandler">
    <!-- @는 받았을때,를 의미 -->
    <input
      type="text"
      v-model="todo"
      placeholder="type new todo-list"
    />
    <button>click</button>
  </form>
  <p v-if="isErr">Error</p>
  <hr />
</template>

<script>
import { ref } from 'vue';

export default {
  setup(props, context) {
    const todo = ref('');
    // const todoArr = ref([]);
    const isErr = ref(false);

    const fnSubmitHandler = function () {
      // e.preventDefault(); 위에서 .prevent로 모디파이어로 대체 사용 가능함
      isErr.value = !todo.value && true;

      context.emit('add-todo', {
        /* 부모가 쓸때는 괄호안에 있는걸 이용하면 됨. */
        id: Date.now(),
        subject: todo.value,
        completed: false,
      });

      if (isErr.value) return false;

      // isErr.value = (!todo.value)||false;
      // todoArr.value.push({
      //   id: Date.now(),
      //   subject: todo.value,
      //   completed: false,
      // });
      todo.value = '';
    };

    return {
      todo,
      todoArr,
      isErr,
      fnSubmitHandler,
    };
  },
};
</script>

<style></style>

<!-- 
<script>
import { ref } from 'vue';

export default {
  setup(props, context) {
    const todo = ref('');
    const hasError = ref(false);
    const onSubmit = () => {
      if (todo.value === '') {
        hasError.value = true;
      } else {
        context.emit('add-todo', {
          id: Date.now(),
          subject: todo.value,
          completed: false,
        });
        hasError.value = false;
        todo.value = '';
      }
    };

    return {
      todo,
      hasError,
      onSubmit,
    };
  },
};
</script> -->
