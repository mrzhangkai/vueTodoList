<template>
  <div>
    <queryBtn/>
    <addList/>
  </div>
</template>

<script>
import queryBtn from './components/queryBtn'
import addList from './components/addList'
export default {
  name: "todo",
  components:{
      queryBtn,
      addList
  }
};
</script>
<style scoped>
</style>
