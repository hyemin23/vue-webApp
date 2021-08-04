import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);


const storage = {
    fetch() {
        const arr = [];
        if(localStorage.length >0){
            for(var i=0; i<localStorage.length; i++){
                if(localStorage.key(i) !== "loglevel:webpack-dev-server"){
                     arr.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
                }
            }
        } 
        return arr;
    }
}


export const store = new Vuex.Store({
    // state == data
    state: {
        headerText: "HI",
        items : storage.fetch(),
    },
    // getters == computed

    // mutations == method
    // state는 그 전의 값
    mutations: {
        addOneItem(state,todoItem){
              let obj = {completed : false, item : todoItem };
            //저장하는 로직
            localStorage.setItem(todoItem,JSON.stringify(obj));
            state.items.push(obj);
        },
        removeOneItem(state,payload){
            localStorage.removeItem(payload.todoItem.item)
            state.items.splice(payload.index,1)
        },
        toggleOneItem(state, payload) {
          state.items[payload.index].completed = !state.items[payload.index].completed;
             localStorage.removeItem(payload.todoItem.item);
            localStorage.setItem(payload.todoItem.item, JSON.stringify(payload.todoItem));
        
        },
         clearAllItems(state){
             localStorage.clear();
             state.items = [];
      }
        
    }

    // actions == async method
});
