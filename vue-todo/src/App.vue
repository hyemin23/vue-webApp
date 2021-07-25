<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input></todo-input>
    <todo-list></todo-list>
    <todo-footer></todo-footer>
  </div>
</template>

<script>
import TodoFooter from "./components/TodoFooter";
import TodoHeader from "./components/TodoHeader.vue";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";

export default {
  components: {
    TodoFooter
    ,TodoList
    ,TodoHeader
    ,TodoInput,
    TodoInput

  }
}
</script>
<style>
body{
  text-align: center;
  background-color: #F6F6F6;
}
input {
  border-style: groove;
  width: 200px;
}
button{
  border-style : groove;
}
.shadow{
  box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.83);
}
</style>