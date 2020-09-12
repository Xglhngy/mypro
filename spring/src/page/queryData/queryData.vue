<template>
   <div class="queryData">
        <!-- 条件 -->
        <div class="queryTj" v-for="(item,index) in tjList" style="display:flex;">
            <span>{{item.tjCname}}</span>
            <inputType :field="item" :type="item.tjXmDataType" :tableType="tableType" v-model="item.tjXmValue"></inputType>
        </div>
        <!-- 分组 -->
        <div class="groupData" style="width:100%;display:flex;justify-content:flex-start;align-items:flex-start;flex-wrap:wrap;">
             <el-checkbox v-model="item.choose" style="min-width:150px;"  v-for="(item,index) in groupList" :label="item.Cname" :key="item.Ename" @change="changeGroup(item,index)"></el-checkbox>
        </div> 
        <el-button @click="toSearchData" type="primary" style="margin-left:30px;">查找</el-button>

   </div>
</template>

<script type="text/ecmascript-6">
import inputType from '@/page/component/inputType'
export default {
    name: '',
    props:['tableId'],
    data() {
        return {
            tableType:'query',
            tjList:[],
            groupList:[],
        }
    },
    components: {
        inputType
    },
    mounted(){
        this.getQueryData()
        this.getqueryCxTjSetting()
    },
    methods:{
        // 获取单据定义
        getQueryData(){
            if(this.tableId!='' && this.tableId!=0){
                this.$axios({
                    method:'POST',
                    url:'/data/query/queryCxDy',   
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        "dataDbToken":localStorage.getItem("dataDbToken"),
                        "sysDbToken":localStorage.getItem("sysDbToken"),
                        "authToken":localStorage.getItem("userToken"),
                    },             
                    data:JSON.stringify({
                        nodeId: this.tableId,
                    }),
                }).then((res) =>{ 
                    if(res.data.code==200){
                        // 填充分组的值
                        let list1=res.data.data.cxCgroup.split(";")
                        let list2=res.data.data.cxEgroup.split(";")
                        for(let i in list1){
                            let obj={
                                Cname:list1[i],
                                Ename:list2[i],
                                choose:true
                            }
                            this.groupList.push(obj)
                        }
                        // 检测数据处理表头数据                                             
                    }else if(res.data.code==1002){                    
                        Toast.fail({message:res.data.msg,duration:800});
                        this.$router.push("/login")  
                    }else{
                        Toast.fail({message:res.data.msg,duration:800});
                    }
                }) 
            }             
        },
        // 获取查询条件定义
        getqueryCxTjSetting(){
            if(this.tableId!='' && this.tableId!=0){
                this.$axios({
                    method:'POST',
                    url:'/data/query/queryCxTjSetting',   
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        "dataDbToken":localStorage.getItem("dataDbToken"),
                        "sysDbToken":localStorage.getItem("sysDbToken"),
                        "authToken":localStorage.getItem("userToken"),
                    },             
                    data:JSON.stringify({
                        nodeId: this.tableId,
                    }),
                }).then((res) =>{ 
                    if(res.data.code==200){
                        for(let i in res.data.data){
                            if(res.data.data[i].defaultValue){
                                res.data.data[i].tjXmValue=res.data.data[i].defaultValue
                            }
                            if(res.data.data[i].tjxmSelXz){
                            }
                        }
                        this.tjList=res.data.data   
                                                         
                    }else if(res.data.code==1002){                    
                        Toast.fail({message:res.data.msg,duration:800});
                        this.$router.push("/login")  
                    }else{
                        Toast.fail({message:res.data.msg,duration:800});
                    }
                }) 
            }  
        },
        // 分组的值改变时
        changeGroup(item,index){
            console.log(item,index,this.groupList)
        },
        // 点击开始查询
        toSearchData(){
            // if(this.tableId!='' && this.tableId!=0){
            //     this.$axios({
            //         method:'POST',
            //         url:'/data/query/queryCxTjSetting',   
            //         headers: {
            //             "X-Requested-With": "XMLHttpRequest",
            //             "Content-Type": "application/json",
            //             "dataDbToken":localStorage.getItem("dataDbToken"),
            //             "sysDbToken":localStorage.getItem("sysDbToken"),
            //             "authToken":localStorage.getItem("userToken"),
            //         },             
            //         data:JSON.stringify({
            //             nodeId: this.tableId,
            //         }),
            //     }).then((res) =>{ 
            //         if(res.data.code==200){
            //             this.tjList=res.data.data  
            //             console.log(this.tjList) 
                                                         
            //         }else if(res.data.code==1002){                    
            //             Toast.fail({message:res.data.msg,duration:800});
            //             this.$router.push("/login")  
            //         }else{
            //             Toast.fail({message:res.data.msg,duration:800});
            //         }
            //     }) 
            // }  
        }
    }
}
</script>

<style scoped lang="stylus">
</style>

