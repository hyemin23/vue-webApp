<template>
  <div class="clearAllContainer">
      <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods:{
    clearTodo(){
      // vuex mutations 호출
      this.$store.commit('clearAllItems');

  //     this.$emit('clearItems');
  //     localStorage.clear();
    }
  }
}
</script>

<style scoped>
.clearAllContainer{
  cursor: pointer;
  width: 8.5rem;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
  border-radius: 5px;
  margin: 0 auto;
}

.clearAllBtn {
  color : #e20303;
  display: block;
}


</style>