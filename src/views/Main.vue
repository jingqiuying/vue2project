<template>
    <el-container>
        <el-aside width="auto">
            <CommonAside/>
        </el-aside>
        <el-container>
            <el-header>
                <common-header/>
            </el-header>
            <common-tag/>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-container>
</template>
  
<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
import CommonTag from '@/components/CommonTag';

  export default {
    name:'Main',
    components: { CommonAside, CommonHeader,CommonTag }
}
  </script>
  
<style lang="less" scoped>
  .el-header{
    padding: 0;
  }
  </style>