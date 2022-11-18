<template>
    <div class="header-container">
        <div class="l-content">
            <el-button @click="handleMenu" icon="el-icon-menu" size="mini"></el-button>
            
            <!-- 面包屑 -->
            <span class="text">首页</span>
        
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
export default {
    name:'CommonHeader',
    methods:{
        handleMenu(){
            this.$store.commit('collapseMenu')
        }
    }
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
    .text {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
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