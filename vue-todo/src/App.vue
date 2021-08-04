<template>
  <div id="app">
    <todo-header/>
    <todo-input/>
    <todo-list/>
    <todo-footer/>
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

  },
    methods:{
      // addOneItem : function(item){
      //         let obj = {completed : false, item };
      //       //저장하는 로직
      //       localStorage.setItem(item,JSON.stringify(obj));
      //       this.todoItems.push(obj);
            
      // } ,
      // removeOneItem:function(todoItem, i){

      //       localStorage.removeItem(todoItem.item)
      //       this.todoItems.splice(i,1)
      // },
      // toggleOneItem:function(todoItem,index){
      //     this.todoItems[index].completed = !this.todoItems[index].completed;
      //     localStorage.removeItem(todoItem.item);
      //       todoItem.completed = !todoItem.completed;
      //       localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        
      // },
      // clearAllItems:function(){
      //   localStorage.clear();
      // }
    },

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
  box-shadow : 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>