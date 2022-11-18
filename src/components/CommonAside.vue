<template>
    <el-menu default-active="1-4-1" 
        class="el-menu-vertical-demo" 
        :collapse="isCollapse" 
        background-color="#545c64"
        text-color="#fff" 
        active-text-color="#ffd04b">
        <h3>{{titleShow}}</h3>
        <el-menu-item @click="clickMunu(item)" v-for="item in noChildren" :key="item.name" :index="item.name">
            <i :class="`el-icon-${item.icon}`"></i>
            <span slot="title">{{item.label}}</span>
        
        </el-menu-item>
        <el-submenu v-for="item in hasChildren" :key="item.label" :index="item.label">
            <template slot="title">
                <i :class="`el-icon-${item.icon}`"></i>
                <span slot="title">{{item.label}}</span>
            </template>
            <el-menu-item-group>
                <el-menu-item @click="clickMunu(son)" v-for="son in item.children" :key="son.name" :index="son.name">{{son.label}}</el-menu-item>
            </el-menu-item-group>
           
        </el-submenu>
    </el-menu>

</template>
<style lang="less" scoped>
    .el-menu{
        height: 100vh;
        border-right: none;
        h3{
            color: #fff;
            text-align: center;
            line-height: 48px;
            font-size: 16px;
            font-weight: 400;
        }
    }
</style>
<script>
export default {
    name:'CommonAside',
    data() {
      return {
        menuData:[
            {
                path:'/',
                name:'home',
                label:'首页',
                icon:'s-home',
                url:'Home/Home'
            },
            {
                path:'/mall',
                name:'mall',
                label:'商品管理',
                icon:'video-play',
                url:'MallManage/MallManage'
            },
            {
                path:'/user',
                name:'user',
                label:'用户管理',
                icon:'user',
                url:'UserManage/UserManage'
            },
            {
                label:'其他',
                icon:'location',
                children:[
                    {
                        path: '/page1',
                        name: 'page1',
                        label: '页面1',
                        icon: 'setting',
                        url: 'Other/PageOne'
                    },
                    {
                        path: '/page2',
                        name: 'page2',
                        label: '页面2',
                        icon: 'setting',
                        url: 'Other/PageTwo'
                    },
                ]
            }
        ]
      }
    },
    methods:{
        clickMunu(item){
            if(this.$route.path !== item.path && !(this.$route.path === '/home' && (item.path ==='/'))){
                this.$router.push(item.path)
            }
        }
    },
    computed:{
        //没子菜单
        noChildren(){
            return this.menuData.filter(item => !item.children)
        },
        //有子菜单
        hasChildren(){
            return this.menuData.filter(item => item.children)
        },
        isCollapse(){
            return this.$store.state.tab.isCollapse
        },
        titleShow(){
            return this.isCollapse ? '后台' : '通用后台管理系统'
        }


    }

}
</script>




