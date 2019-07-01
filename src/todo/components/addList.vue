<template>
  <div>
    <ul>
      <li
        v-for="(item,index) in $store.state.lists"
        :key="index"
        @click="$store.commit('handleClick',index)"
      >{{item}}</li>
    </ul>
  </div>
</template>

<script>
import store from "../../vuex/store";
export default {
  name: "addList",
  store
};
</script>
<style scoped>
</style>
