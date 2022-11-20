<template>
  <div class="tabs">
    <el-tag v-for="item in tags" 
        :key="item.path"
        :closable="item.name !== 'home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item)">
        {{ item.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState,mapMutations } from 'vuex';
export default {
    name:'CommonTag',
    components: {  },
    data() {
       return {
          
       }
    },
    methods:{
        ...mapMutations(['closeTag']),
        //点击tag跳转的功能
        changeMenu(i){
            this.$router.push({name:i.name})
        },
        //点击tag删除的功能
        handleClose(i) {
            // this.$nextTick()
            // this.$store.state.tab.tabsList.splice(this.$store.state.tab.tabsList.indexOf(i),1) 
            this.closeTag(i)
            
      }

    },
    computed:{
        ...mapState({
            tags:state => state.tab.tabsList
        })
    },
    mounted(){
        // console.log(this.$store);
    }

}
</script>

<style>

</style>