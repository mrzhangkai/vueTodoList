<template>
  <div>
    <el-row>
      <el-col :span="16" style="margin-right:20px">
        <el-input placeholder="请输入内容" v-model="todoList" clearable></el-input>
      </el-col>
      <el-col :span="4">
        <el-button type="primary" @click="addList">添加事件</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import store from '../../vuex/store'
export default {
  name: "queryBtn",
  data() {
    return {
      todoList: ""
    };
  },
  store:store,
  methods:{
      addList:function(){
          this.$store.state.lists.push({name:this.todoList})
      }
  }
};
</script>
<style scoped>
</style>
