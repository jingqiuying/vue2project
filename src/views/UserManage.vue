<template>
  <div class="manage" >
    <el-dialog title="提示"  :before-close="handleClose" :visible.sync="dialogVisible" width="50%">
      <!-- 表达信息 -->
      <el-form ref="form" :model="form" :rules="rules" label-width="80px" :inline="true">
        <el-form-item label="姓名" placeholder="请输入姓名" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="年龄" placeholder="请输入年龄" prop="age">
          <el-input v-model="form.age"></el-input>
        </el-form-item>
        <el-form-item label="性别" prop="sex">
          <el-select v-model="form.sex" placeholder="请选择">
            <el-option label="男" :value="1"></el-option>
            <el-option label="女" :value="0"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="出生日期" prop="birth">  
          <el-date-picker type="date" placeholder="选择日期" v-model="form.birth" value-format="yyyy-MM-DD"></el-date-picker>
        </el-form-item>
        <el-form-item label="地址" placeholder="请输入地址" prop="addr">
          <el-input v-model="form.addr"></el-input>
        </el-form-item>

      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="submit">确 定</el-button>
      </span>
    </el-dialog>
    <div class="manage-header">
      <el-button type="primary" @click="handleAdd">
        +新增
      </el-button>
      <!-- form搜索区域 -->
      <el-form :model="userForm" :inline="true">
        <el-form-item>
          <el-input placeholder="请输入名称" v-model="userForm.name"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="common-table">
      <el-table height="90%" :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="age" label="年龄">
        </el-table-column>
        <el-table-column prop="sex" label="性别">
          <template slot-scope="scope">
            <span>{{ scope.row.sex == 1 ?'男' :'女' }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="birth" label="出生日期">
        </el-table-column>
        <el-table-column prop="addr" label="地址">
        </el-table-column>
        <el-table-column>
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.row)">Edit</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="pager">
        <el-pagination layout="prev, pager, next" :total="total" @current-change="handlePage">
        </el-pagination>
      </div>
    </div>
    
  </div>
</template>
  
<script>
import {getUser,addUser,editUser,delUser} from '../api'
export default {
  name: 'User',
  components: {},
  data() {
    return {
      dialogVisible: false,
      form: {
        name: '',
        age: '',
        sex: '',
        birth: '',
        addr: '',
      },
      rules:{
        name: [
            { required: true, message: '请输入名称'},
            { min: 2, max: 21, message: '长度在 2 到 21 个字符' }
          ],
          age:[{ required: true, message: '请输入年龄' },],
          sex:[{ required: true, message: '请输入性别' },],
          birth:[{ required: true, message: '请输入出生日期' },],
          addr:[{ required: true, message: '请输入地址' },],
      },
      tableData:[],
      modalType:0, //0为新增 1为修改
      total:0,//当前总条数
      pageData:{
        page:1,
        limit:10
      },
      userForm:{
        name:''
      }
      
    }
  },
  methods: {
    submit(){
      this.$refs.form.validate((valid,b)=>{
        if(valid){
          //后续对表单数据的处理
          if(this.modalType === 0){
            addUser(this.form).then(() => {
              //重新获取列表接口
              this.getList()
            })
          }else{
            editUser(this.form).then(() => {
              //重新获取列表接口
              this.getList()
            })
          }

          //清空表单数据
          this.$refs.form.resetFields()
          //关闭弹窗
          this.dialogVisible = false
        }
      })
    },
    handleClose(){
      this.$refs.form.resetFields()
      this.dialogVisible = false
    },
    handleEdit(row){
      this.modalType = 1
      this.dialogVisible = true
      //注意需要对当前数据进行深拷贝，否则会出差
      this.form = JSON.parse(JSON.stringify(row))
    },
    handleAdd(){
      this.dialogVisible=true,
      this.modalType = 0
    },
    cancel(){
      this.handleClose()
    },
    //获取列表数据
    getList() {//
      getUser({params:{...this.userForm,...this.pageData}}).then(({ data }) => {
        this.tableData = data.list
        console.log(data.count);
        this.total = data.count || 0
        // console.log(data);
      })
    },
    handleDelete(row) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        delUser({ id: row.id }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.getList()
        })
        
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    //选择页码的回调函数
    handlePage(val){
      console.log(val,'val');
      this.pageData.page = val

      this.getList()
    },
    onSubmit(){
      this.getList()
    }
    
  },
  mounted() {
   this.getList()
    
  },
}
</script>
  
<style lang="less" scoped>
  .manage{
    height: 90%;
    .manage-header{
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .common-table{
      height: calc(100% - 62px);
      position: relative;
      .pager{
        position: absolute;
        bottom: 0;
        right: 20px;
      }
    }
  }
</style>