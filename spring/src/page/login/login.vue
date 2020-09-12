<template>
   <div class="login">
           <!-- 登录的用户名密码 -->
       <div class="login_content" v-show="showDeploy">
           <h4>SPRINGR</h4>
           <div class="userData">
               <span class="iptName">用户名：</span>
               <el-input v-model="user.userData" placeholder="请输入用户名" clearable></el-input>
           </div>
           <div class="password">
               <span  class="iptName">密码：</span>
               <el-input placeholder="请输入密码" v-model="user.password" show-password clearable></el-input>
           </div>
            <el-button type="success" class="firstBtn" @click="toLogin">登录</el-button>
            <el-button type="warning" @click="toDeploy">服务器设置</el-button>
       </div>
           <!-- 登录的服务器配置 -->
       <div class="login_deploy" v-show="!showDeploy">
           <h4>SPRINGR</h4>
           <div class="serverName">
               <span class="iptName">服务器名称：</span>
               <el-input v-model="serverData.jdbcUrl" placeholder="" clearable></el-input>
           </div>
           <div class="port">
               <span class="iptName">端口：</span>
                <el-input placeholder="" v-model="serverData.port" clearable></el-input>
           </div>
           <div class="systemServer">
               <span class="iptName">系统数据库：</span>
                <el-input placeholder="" v-model="serverData.sysDbName" clearable></el-input>
           </div>
           <div class="dataServer">
               <span class="iptName">数据数据库：</span>
                <el-input placeholder="" v-model="serverData.dataDbName" clearable></el-input>
           </div>
           <div class="sqlUser">
               <span class="iptName">SQL用户名：</span>
                <el-input placeholder="" v-model="serverData.username" clearable></el-input>
           </div>
           <div class="sqlPassWord">
               <span class="iptName">SQL密码：</span>
                <el-input placeholder="" v-model="serverData.password" show-password clearable></el-input>
           </div>
            <el-button type="success" class="firstBtn" @click="toWriteData">确定</el-button>
            <el-button type="warning" @click="cancel">取消</el-button>
       </div>
   </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Toast } from 'vant';

Vue.use(Toast);

export default {
   name: '',
   data() {
       return {
            showDeploy:true,
            user:{
               password:'',
               userData:''
            },           
            serverData:{
               jdbcUrl:'',
               port:'',
               sysDbName:'',
               dataDbName:'',
               username:'',
               password:'',
               source:"123"
            },
            server:false
       }
   },
  components: {},
  mounted(){
      
  },
  methods:{
        //   去登录
      toLogin(){
        if(JSON.parse(localStorage.getItem("serverData"))){
            this.serverData=JSON.parse(localStorage.getItem("serverData"))
            this.server=true
        }
        // localStorage.setItem('user',JSON.stringify(this.user))  
        if(this.server){
            this.$axios({
            method:'POST',
            url:'/data/user/login',   
            headers: {
                "X-Requested-With": "XMLHttpRequest",
                "Content-Type": "application/json",
                "dataDbToken":localStorage.getItem("dataDbToken"),
                "sysDbToken":localStorage.getItem("sysDbToken"),
            },             
            data:JSON.stringify({
                username: this.user.userData,
                password: this.user.password,

            }),
            }).then((res) =>{ 
                if(res.data.code==200){
                    localStorage.setItem("userToken",res.data.data.userToken)
                    this.$setItem('userToken', res.data.data.userToken)
                    // localforage.setItem('userToken', res.data.data.userToken).then(function (value) {
                    //     // 当值被存储后，可执行其他操作
                    //     console.log(value);
                    // }).catch(function(err) {
                    //     // 当出错时，此处代码运行
                    //     console.log(err);
                    // });
            
                    localStorage.setItem("menuList",JSON.stringify(res.data.data.menuList))
                    if (this.$route.query.redirect) {
                        this.$router.push({ path: this.$route.query.redirect });
                    // 如不存在，直接跳转到首页
                    } else {
                        this.$router.push({
                            name:"index",
                            params:{
                                user:this.user
                            }
                        })
                    }                   
                }else{
                    // Toast({message:res.msg,duration:1000});  
                    Toast.fail({message:res.data.msg,duration:800});

                }      
            }) 
        } else{
            Toast.fail({message:'请填写服务器配置',duration:800});
        }           
         
      },
        //   跳转配置项页
      toDeploy(){
        this.showDeploy=false
        if(JSON.parse(localStorage.getItem("serverData"))){
            this.serverData=JSON.parse(localStorage.getItem("serverData"))
        }
      },
        //   点击存入数据库配置项
      toWriteData(){
            localStorage.setItem('serverData',JSON.stringify(this.serverData))
            this.$axios({
                method:'POST',
                url:'/dbHeartBeat/checkDB',                
                headers: {
                    "X-Requested-With": "XMLHttpRequest",
                    "Content-Type": "application/json"
                },
                data:JSON.stringify(this.serverData)
            }).then((res) =>{                    
                if(res.data.code==200){
                    localStorage.setItem("sysDbToken",res.data.data.sysDbToken)
                    localStorage.setItem("dataDbToken",res.data.data.dataDbToken)
                    this.showDeploy=true
                }else{
                    Toast.fail(res.data.msg)
                }
            })    
            
      }, 
      //   配置项取消配置
      cancel(){
          this.showDeploy=true
      }
  }
}
</script>

<style scoped lang="stylus">
.login
    text-align center
    position relative
    width 100%
    height 100%
    background url("/static/images/back.png")
    background-size 100%       
    .login_content
        width 350px
        height 460px
        background white
        position absolute
        top 50%
        left 50%
        margin-left -175px
        margin-top -230px
        .el-button
            width 250px
            margin-top 25px
            margin-left 0
        .firstBtn
            margin-top 60px
        h4
            height 100px
            line-height 100px
        .userData,.password
            display flex
            justify-content space-around
            align-content center
            width 100%
            padding 12px 20px
            box-sizing border-box
            .iptName
                width 32%
                text-align left 
                line-height 40px
                font-size 15px
                font-weight 550              
    .login_deploy
        width 350px
        height 460px
        background white
        position absolute
        top 50%
        left 50%
        margin-left -175px
        margin-top -230px
        .el-button
            height 40px
            width 120px
            margin-top 20px
        h4
            height 80px
            line-height 80px
        .serverName,.port,.systemServer,.dataServer,.sqlUser,.sqlPassWord
            display flex
            justify-content space-around
            align-content center
            width 100%
            padding 5px 20px
            box-sizing border-box
            .iptName
                width 40%
                text-align left 
                line-height 40px
                font-size 14px
                font-weight 550      

</style>

