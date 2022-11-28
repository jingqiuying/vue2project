<template>
    <el-form ref="form" :inline="true" label-width="70px" class="login-container" :model="form" :rules="rules">
        <h3 class="login-title">系统登录</h3>
        <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button @click="submit" style="margin-left: 105px;" type="primary">登录</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
import Mock from "mockjs";
import Cookie from 'js-cookie';
import {getMenu} from '../api'
export default {
    name: 'Login',
    components: {},
    data() {
        return {
            form: {
                username: 'admin',
                password: 'admin',
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    {required:true, trigger: 'blur' ,message:'请输入密码'}
                ]
            }
        }
    },
    methods: {
        //登录
        submit(){
            this.$refs.form.validate((valid) =>{
                if (valid) {
                    getMenu(this.form).then(({ data }) => {
                        if (data.code === 20000) {
                            //token信息存入cookie用于不同页面间的通信
                            Cookie.set('token', data.data.token)
                            //获取菜单数据
                            this.$store.commit('setMenu',data.data.menu)
                            this.$store.commit('addMenu')
                            // console.log(this.$router);
                            //跳转到首页
                            this.$router.push('/home')
                        }else{
                            this.$message.error(data.data.message)
                        }
                    })
                    
                }
             
            })
        }
    },
}
</script>

<style lang="less" scoped>
    .login-container{
        width: 350px;
        border-radius: 15px;
        border:1px solid #eaeaea;
        margin: 180px auto;
        box-shadow: 0 0 25px #cac6c8;
        .login-title{
            text-align: center;
            margin-top: 10px;
            margin-bottom: 40px;
        }
    }
</style>

