import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

//存储状态
const state={
    lists: [
        { name: '早上9:00上班'},
        { name: '中午11:50吃饭'},
        { name: '晚上5:30吃饭'},
        { name: '晚上6:30加班'}
    ]
}
const mutations={
    handleClick(state,index){
        state.lists.splice(index,1);
    }
}

export default new Vuex.Store({
    state,
    mutations
});