<template>
  <div>
    <h1>Todo List의 List</h1>
    <p>{{ title}}</p>
    <ul>
      <li v-for="todo in todos" v-bind:key="todo.id">{{todo.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",

  data() {
    return {
      title: "This is title"
      //   todos: [
      //     { id: 1, content: "Vue.js 복습", isComplete: false },
      //     { id: 2, content: "JS 복습", isComplete: false },
      //     { id: 3, content: "알고리즘 학습", isComplete: false },
      //     { id: 4, content: "코딩테스트 연습", isComplete: false }
      //   ]
    };
  },
  props: { todos: Array }
};
</script>

<style>
</style>