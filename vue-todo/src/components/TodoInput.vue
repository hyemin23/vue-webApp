<template>
  <div class="inputBox shadow">
      <input type="text" v-model="newTodoItem" @keyup.enter="addTodo">
      <span class="addContainer" @click="addTodo">
          <i class="fas fa-plus addBtn"></i>
      </span>
       <Modal v-if="showModal" @close="showModal = false">
            <h3 slot="header">
                경고
                <i class="closeModalBtn fas fa-times" @click="showModal = false"/>
                </h3>
            <div slot="body">
                바디
                </div>
            <div slot="footer">
                푸터
 <button class="modal-default-button" @click="$emit('close')">
                OK
              </button>
            </div>
        </Modal>
  </div>
</template>

<script>
import Modal from "./common/Modal"
export default {
    data : function(){
        return {
            newTodoItem : ""
            ,showModal : false
        }
    },
    methods : {
        addTodo : function(){
            if(this.newTodoItem !== ''){
                this.$emit('addTodoItem',this.newTodoItem);
                this.clearInput();
            }else{
                this.showModal = !this.showModal;
            }
            
        },      
        clearInput : function(){
            this.newTodoItem = "";
        }
    },
    // 컴포넌트의 관계도 자식은 Modal 부모는 App이 되는것임.
    components : {
        Modal : Modal
    }
}
</script>

<style scoped>
input:focus{
    outline : none;
}

.inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
}

.inputBox input{
    border-style: none;
    font-size: 0.9rem;
}
.addContainer{
    float: right;
    background: linear-gradient(to right, #fff 0%, #f0f 0%, #f0f 100%);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;

}

.addBtn{
    color: white;
    vertical-align: middle;
}

.closeModalBtn{
    color: #42b983;
}
</style>