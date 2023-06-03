<template>
  <form @submit.prevent="fnAddListHandler">
    <!-- v-on = @ , 소괄호를 넣으면 반드시 리턴을 해줘야함 자식이 부모한테 에밋으로 넘겨줄때는 소괄호가 있으면 안됨.(소괄호가 있고없고의 차이는 파라미터를 넣을것이냐 말것이냐의 차이) -->
    <input ref="_refInput" v-model="_title" type="text" />
    <!-- 브이모델은 폼에만 연결하는거. 온체인지이벤트발생했을때 알아서 바꿔주세요 -->
    <button>일정추가</button>
  </form>
  <hr />
</template>

<script>
import { ref } from "vue";
export default {
  setup(props, context) {
    const _title = ref("");
    const _refInput = ref(null);
    const fnAddListHandler = () => {
      const data = {
        id: Date.now(),
        title: _title.value,
        completed: false,
      };
      context.emit('emitAddListHandler', data);
      //부모님한테 이르는 방법. 버튼이 실행됐을때 부모가 알게하는건데 이름을 하나 정해줘야함 부모에게 보내는 메일제목. 편한이름으로 적기, 실제 필요한 데이터를 두번째인수에 적음
      //이것도 일종의 이벤트라고 볼수있음 그래서메일을 전송했을때. 그걸 브이바인드. 줄여서 @
      _title.value = "";
      _refInput.value.focus()
    };

    return {
      fnAddListHandler,
      _title,
      _refInput,
    };
  },
};
</script>

<style></style>
