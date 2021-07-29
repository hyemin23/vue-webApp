<template>
  <div id="app">
    <todo-header></todo-header>
    <todo-input v-on:addTodoItem="addOneItem"></todo-input>
    <todo-list :propsData="todoItems" v-on:removeItem="removeOneItem"
      v-on:toggleItem="toggleOneItem"
    />
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

  },
    data: function(){
        return{
            todoItems:[],
        }
    },
  created: function(){
        if(localStorage.length >0){
            for(var i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                     this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        }
    },
    methods:{
      addOneItem : function(item){
              let obj = {completed : false, item };
            //저장하는 로직
            localStorage.setItem(item,JSON.stringify(obj));
            this.todoItems.push(obj);
            
      } ,
      removeOneItem:function(todoItem, i){

            localStorage.removeItem(todoItem.item)
            this.todoItems.splice(i,1)
      },
      toggleOneItem:function(todoItem,index){
        console.log(todoItem[index])
          this.todoItems[index].completed = !this.todoItems[index].completed;
          localStorage.removeItem(todoItem.item);
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        
      }
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