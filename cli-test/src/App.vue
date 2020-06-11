<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <!-- 3. 컴포넌트를 템플릿에 추가한다. -->
    <!-- v-bind => todos의 속성을 보내겠따. -->
    <TodoList v-bind:todos="todos" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
// 1. TodoList.vue 를 import 한다.
import TodoList from "./components/TodoList.vue";

export default {
  name: "App",
  components: {
    // 2. 컴포넌트를 등록한다.
    HelloWorld,
    TodoList
  },
  data() {
    return {
      todos: [
        { id: 1, content: "Vue.js 복습", isComplete: false },
        { id: 2, content: "JS 복습", isComplete: false },
        { id: 3, content: "알고리즘 학습", isComplete: false },
        { id: 4, content: "코딩테스트 연습", isComplete: false }
      ]
    };
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
