<template>  
    <!-- 数据详情 -->
   <div class="">
        <div class="Mantle" v-show="showMantle">
        </div>
       <!-- 表头数据 -->      
        <div class="detailHeader">
            <div class="datail_header_title" v-for="(item,index) in tableNameData" v-if="item.xmPosition=='表头'">
                <span :style="{overflow:'hidden',position:'fixed',fontSize:item.xmLabelFontSize+'px',width:item.xmLabelWidth*1.1+'px',height:item.xmLabelHeight*1.2+'px',top:item.xmLabelY*1.06+'px',left:item.xmLabelX *1.08+'px',color:item.xmLabelColor}">{{item.caption?item.caption:item.xmCname}}</span>

                <inputType :field="item" :type="item.xmDataType" :tableType="tableType"  v-model="tableData[item.xmEname]"></inputType>
                <!-- <inputType :type="type" v-model="val"></inputType> -->
            </div>           
        </div>
        <div class="styleData"  v-for="(item,index) in styledata" :key="index">
            <div v-if="item.xmType=='框'" :style="{border: '1px solid #666',position:'fixed',fontSize:item.xmFontSize+'px',width:item.xmWidth*1.1+'px',height:item.xmHeight*1.06+'px',top:item.xmTop*1.06+'px',left:item.xmLeft * 1.08+'px',color:item.xmColor,zIndex:'-1',}"></div>
            <div v-if="item.xmType=='标签'" :style="{position:'fixed',fontSize:item.xmFontSize+'px',width:item.xmWidth*1.1+'px',height:item.xmHeight*1.06+'px',top:item.xmTop*1.06+'px',left:item.xmLeft *1.08+'px',color:item.xmColor}">{{item.caption}}</div>
        </div>
         <!-- 表体数据 -->

        <div class="bodyB" :style="{position:'fixed',top:bStyle.headHeight+'px',left:'0px',bottom:'0px',background:'#fff',width:'100%',overflow:'auto'}">
            <div id ="spreadsheet" ></div>

        </div>
        <button @click="toadd">提交</button>  
   </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Toast } from 'vant';
import inputType from '@/page/component/inputType'
import jexcel from 'jexcel'
import 'jexcel/dist/jexcel.css'
export default {
    name: '',
    data() {
        return {
            tableType:'table',
            position:{
                w:'100',
                h:'10',
                l:'20',
                t:'20'
            },
            showMantle:false,
            type:'string',
            float:'2',
            isTrue:true,
            default:'',
            val:'',
            rowData:{},
            tableData:{}, 
            loading:true,
            bList:[],
            tableNameData:[],
            tableHeight:"800",
            nodeId:'',
            djLsh:'',
            colWidth:"180",
            options:{
                data:[
                  
                ],
                columns: [
                   
                ]   
            },
            styledata:[],
            bStyle:{},
        }
    },
    components: {
        inputType
    },
    mounted(){ 
        this.getFromName()   
        this.getDatailData()  
    },
    methods:{
        toadd(){            
             for(let i in this.options.columns){
                 this.options.columns[i]
             }   
        },
        // 获取数据
        getDatailData(){
           
        },
        // 处理数据的类型
        getType(type){
            let t='';
            switch (type){
                case '字符':
                    return "text";
                    break;
                case "数据":
                    return "numeric";
                    break;
                case "整数":
                    return "numer";
                    break;       
            }
        },
         // 根据单据id请求对应字段接口
        getFromName(){
            var pro= new Promise((resolve, reject)=>{
                this.tableData={}
                this.tableNameData=[]
                if(this.tableId!='' && this.tableId!=0){
                    // 请求字段
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryDjZdSetting',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({
                            nodeId: localStorage.getItem("nodeId")
                        }),
                    }).then((res) =>{ 
                        if(res.data.code==200){
                            // 检测数据处理表头数据
                            this.tableNameData=res.data.data
                            this.loading=false    
                            for(let i in this.tableNameData){
                                if(this.tableNameData[i].xmPosition=='表体'){ 
                                    let type=''; 
                                    // 根据返回的表体数据判断表体字段的类型
                                    if(this.tableNameData[i].xz){
                                        type='dropdown'
                                        let source=this.tableNameData[i].xz                                
                                        let obj={
                                            type: type,
                                            title:this.tableNameData[i].caption?this.tableNameData[i].caption:this.tableNameData[i].xmCname,
                                            width:120,
                                            xmEname:this.tableNameData[i].xmEname,
                                            source:source,
                                        }
                                        this.options.columns.push(obj)

                                    } else{
                                        type=this.getType(this.tableNameData[i].xmDataType)
                                        let obj={
                                            type: type,
                                            title:this.tableNameData[i].caption?this.tableNameData[i].caption:this.tableNameData[i].xmCname,
                                            width:120,
                                            xmEname:this.tableNameData[i].xmEname,
                                        }
                                        this.options.columns.push(obj)

                                    }                             
                                    
                                }
                            } 
                             resolve("200")              
                        }else if(res.data.code==1002){                    
                            Toast.fail({message:res.data.msg,duration:800});
                            this.$router.push("/login")  
                        }else{
                            Toast.fail({message:res.data.msg,duration:800});
                        }
                    }) 
                }    
            })    
            pro.then(value => {   
                if(value==200){
                    if(localStorage.getItem("dataState")!='update'){
                        this.showMantle=true
                        console.log(localStorage.getItem("dataState"))
                    }
                    // 请求字段对应的值
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryDjDetail',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({
                            nodeId: localStorage.getItem("nodeId"),
                            djLsh: localStorage.getItem("DjLsh")
                        }),
                    }).then((res) =>{ 
                        if(res.data.code==200){
                            // 所有的数据
                            this.tableData=res.data.data
                            // 表体数据
                            this.bList=res.data.data.bList
                            // 处理默认值
                            // 处理jexcel所需的数据
                            for(let i in this.bList){
                                let arr=[];
                                for(let j in this.options.columns){
                                    arr.push(this.bList[i][this.options.columns[j].xmEname])
                                    // console.log(this.options.columns[j].xmEname+"dsfsd",this.bList[i][this.options.columns[j].xmEname])
                                }
                                this.options.data.push(arr)
                            }
                            // 生成jexcel
                            jexcel(document.getElementById("spreadsheet"),{
                                    data:this.options.data,
                                    columns:this.options.columns,
                                    onchange:this.changeBlist
                                }                           
                                
                            );    

                        }else if(res.data.code==1002){                
                            Toast.fail({message:res.data.msg,duration:800});
                            this.$router.push("/login")  
                        }else{
                            Toast.fail({message:res.data.msg,duration:800});
                        }
                    }) 

                    // 获取单据样式
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryDjXsSetting',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({
                            nodeId: localStorage.getItem("nodeId"),
                        }),
                    }).then((res) =>{ 
                        
                        if(res.data.code==200){
                            this.styledata=res.data.data
                        }
                        // console.log(this.styledata,res)
                    }) 
                    // 获取菜单数据
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryDjSetting',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({
                            nodeId: localStorage.getItem("nodeId"),
                        }),
                    }).then((res) =>{                         
                        if(res.data.code==200){
                            this.bStyle=res.data.data
                        }
                        // console.log(this.styledata,res)
                    }) 
                }
            })
        },
        // 表体数据改变时
        changeBlist(instance, cell, x, y, value){
            if(value){
                 var cellName = jexcel.getColumnNameFromId([x,y]);
                             
                this.bList[y][this.options.columns[x].xmEname]=value
                console.log(instance, cell, x, y, value,this.bList)
            }           
        }
    },
    watch:{
        rowData:function(){           
        }
    }
}
</script>

<style scoped lang="stylus">
.detailHeader
    width 80%
    margin 0 auto
    display flex
    justify-content flex-start
    align-items center
    flex-wrap wrap
    .datail_header_title
        width 300px
        margin-left 50px
        margin-top 20px
        display flex
        justify-content space-between
        align-items center
        .el-input
            width 200px
.Mantle
    width 100%
    position fixed
    top 0
    bottom 50px
    z-index 999
</style>

