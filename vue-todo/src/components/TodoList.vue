<template>
  <div>
      <ul>
          <li v-for="(todoItem,i) in todoItems" v-bind:key="i" class="shadow">
              <i class="checkBtn fas fa-check-circle" v-bind:class="{checkBtnCompleted : todoItem.completed}" @click="toggleComplete(todoItem,i)"></i>
              <span v-bind:class="{textCompleted:todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" @click="removeTodo(todoItems,i)">
                <i class="fas fa-trash-alt"/>
              </span>
          </li>

      </ul>
  </div>
</template>

<script>
export default {
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
        removeTodo:function(todoItems, i){
            localStorage.removeItem(todoItems)
            this.todoItems.splice(i,1)
        },
        toggleComplete : function(todoItem,index){
            localStorage.removeItem(todoItem.item);
            todoItem.completed = !todoItem.completed;
            localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
        }
    }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding-left: 0px;
  margin-top: 0;
  text-align: left;
}
li {
  display: flex;
  min-height: 50px;
  height: 50px;
  line-height: 50px;
  margin: 0.5rem 0;
  padding: 0 0.9rem;
  background: white;
  border-radius: 5px;
}
.checkBtn {
  line-height: 45px;
  color: #62acde;
  margin-right: 5px;
}
.checkBtnCompleted {
  color: #b3adad;
}
.textCompleted {
  text-decoration: line-through;
  color: #b3adad;
}
.removeBtn {
  margin-left: auto;
  color: #de4343;
}
/* transition css */
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>