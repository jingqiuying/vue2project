<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            
            <!-- 面包屑 -->
            <el-breadcrumb separator="/">
                <el-breadcrumb-item v-for="i in tags" :key="i.path" :to="{path:i.path}">
                    {{i.label}}
                </el-breadcrumb-item>
            </el-breadcrumb>
        
        </div>
          <div class="r-content">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <img class="user" src="../assets/mouth.png" alt="">
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                    
                </el-dropdown-menu>
            </el-dropdown>

          </div>
    </div>

</template>

<script>
import { mapState } from 'vuex';
export default {
    name:'CommonHeader',
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        }
    },
    computed:{
        ...mapState({tags:state => state.tab.tabsList})
    },
}
</script>

<style lang="less" scoped>
.header-container {
    background-color: #333;
    padding: 0 20px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .l-content{
        display: flex;
        align-items: center;
        /deep/.el-breadcrumb__item{
            .el-breadcrumb__inner{
                font-weight: normal;
                &.is-link{
                    color: #666;
                }
            }
            &:last-child{//伪类
                .el-breadcrumb__inner{
                    color: #fff;
                }
            }


        }
        .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
    }
    }
    
    .r-content {
        .user {
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
}
</style>