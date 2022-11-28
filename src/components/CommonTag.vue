<template>
  <div class="tabs">
    <el-tag 
        v-for="(item,index) in tags" 
        :key="item.path"
        :closable="item.name !== 'home'"
        :effect="$route.name === item.name ? 'dark' : 'plain'"
        @click="changeMenu(item)"
        @close="handleClose(item,index)"
        size="small">
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
        handleClose(i,index) {
            // this.$nextTick()
            // this.$store.state.tab.tabsList.splice(this.$store.state.tab.tabsList.indexOf(i),1) 
            this.closeTag(i)
            const length = this.tags.length
            //删除之后的跳转逻辑
            if(i.name !== this.$route.name){
                return
            }
            //表示的是删除最后一项
            if(index === length){
                this.$router.push({
                    name:this.tags[index-1].name
                })
            }else{
                this.$router.push({
                    name:this.tags[index].name
                })
                
            }
            
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

<style lang="less" scoped>
.tabs{
    padding: 20px;
    .el-tag{
        cursor: pointer;
        margin-right: 15px;
    }
}
</style>>