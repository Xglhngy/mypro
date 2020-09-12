<template>
    <!-- 单据显示页面 -->
   <div class="tableData">            
       <!-- 点击筛选 -->
        <el-popover
            placement="bottom"
            width="600"
            v-model="showPopover"
            trigger="click">
            <div class="modelContent" @click.stop>
                <div class="searchName">
                    请输入项目：
                    <el-select @change="chooseName"  v-model="selectValue" placeholder="请选择">
                        <el-option
                            v-for="item in tableNameData"
                            v-if="item.xmPosition=='表头'"
                            :key="item.xmCname"
                            :label="item.xmCname"
                            :value="item.xmEname">
                        </el-option>
                    </el-select>
                    条&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;件：
                    <el-select class="operator" v-model="operator" placeholder="请选择">
                        <el-option
                            v-for="item in operatorList"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>
                    <br>
                    <br>
                    匹&nbsp;&nbsp;&nbsp;配&nbsp;&nbsp;&nbsp;&nbsp;值：
                    <el-input class="searchVal" v-model="searchVal" placeholder="请输入内容"></el-input>
                    匹配方式：
                    <el-select class="method" :disabled="operator!='=' || mehodStatus" v-model="method" placeholder="请选择">
                        <el-option
                            v-for="item in methodList"
                            :key="item"
                            :label="item"
                            :value="item">
                        </el-option>
                    </el-select>               
                    <br>
                    <br>    
                    <!-- 多条件的情况                            -->
                    <div class="ModelContents" v-show="showModelContent">
                        <div class="modelContent_header">
                            <el-radio-group v-model="radioVal">
                                <el-radio label="并且" value="并且"></el-radio>
                                <el-radio label="或者" value="或者"></el-radio>                            
                            </el-radio-group>
                            <el-button @click="addVal" type="primary" style="margin-left:30px;">添加</el-button>
                        </div>
                        <el-table
                            :border=true
                            :data="chooseData"   
                            :show-header=true  
                            >   
                            <el-table-column
                                prop="column"
                                label="项目"
                                width="120">
                            </el-table-column>
                            <el-table-column
                                prop="operator"
                                label="表达式"
                                width="100">
                            </el-table-column>
                            <el-table-column
                                prop="value"
                                label="值"
                                width="220">
                            </el-table-column>
                            <el-table-column
                                prop="relationship"
                                label="关系"
                                width="130">
                            </el-table-column>
                            <el-table-column
                                align="right">                            
                                <template slot-scope="scope">                               
                                    <el-button
                                    size="mini"
                                    type="danger"
                                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                                </template>
                                </el-table-column>
                        </el-table>
                    </div>
                    <el-button @click="changeBtnStatus"><<{{btnstatus}}</el-button>
                    <el-button @click="toSearch" type="primary">确认</el-button>
                    <el-button @click="toCancel" type="warning">取消</el-button>
                </div>
            </div>   
            <el-button slot="reference">过滤</el-button>
        </el-popover>   
        <!-- 点击控制字段的显示隐藏 -->
        <el-popover
            placement="top"
            width="800"
            v-model="visible">
            <!-- <el-checkbox-group v-model="checkList"> -->
            <el-checkbox v-model="item.choose" style="min-width:150px;" v-if="item.xmPosition=='表头'" v-for="(item,index) in tableNameData" :label="item.xmCname" :key="item.xmCname" @change="changeCheckBoxData(item,index)"></el-checkbox>    
            <!-- </el-checkbox-group> -->
            <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">确定</el-button>
            </div>
            <el-button slot="reference">字段</el-button>
        </el-popover>
        <!-- 新增          -->
        <el-button slot="reference" @click="addData">新增</el-button>
        <el-button slot="reference" @click="seeData">预览</el-button>
        <el-button slot="reference" @click="updateData">修改</el-button>

        <!-- 数据源    -->
        <el-table :data="tableData"
            class="table"
            v-loading="loading"
            element-loading-text="拼命加载中"
            element-loading-spinner="el-icon-loading"
            element-loading-background="rgba(0, 0, 0, 0.8)"
            @row-dblclick="toDetail"
            @selection-change="changeFun"                

            border
            :max-height="tableHeight"
        >
            <el-table-column
                type="selection"
                width="55">
            </el-table-column>
            <el-table-column
                :show-overflow-tooltip="true"
                v-for="(item,index) in tableNameData"
                v-if="item.xmPosition=='表头' && item.choose"
                :key="index"
                :property="item.xmEname"
                :label="item.xmCname"
                :width="colWidth">
            </el-table-column>
        </el-table>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageNum"
            :page-sizes="[100, 200, 300, 400]"
            :page-size="pageSize"
            background
            layout="total, sizes, prev, pager, next, jumper"
            :total="total">
        </el-pagination>      
   </div>
</template>

<script scoped type="text/ecmascript-6">
export default {
   props:['tableId'],
   name: '',
   data() {
        return {
           checkList:[],
           visible: false,
           multipleSelection:[],
           radioVal:'并且',
           selectValue:'',
           showPopover:false,
           showModelContent:false,
           tableNameData:[],
           operatorList:["=","<>",">",">=","<","<=","为空","不空"],
           operator:'=',
           method:'',
           methodList:["完全匹配","首部匹配","尾部匹配","任意匹配"],
           mehodStatus:true,//匹配状态为true则不可选匹配状态
           tableData:[],
           loading:true,
           showModel: true,
           searchVal:'',
           btnstatus:'单条件',
           tableHeight:800,
           colWidth:"180",
           pageNum:1,
           pageSize:100,
           total:1000,
           chooseData:[              
           ]
       }
   },
  components: {},
  mounted(){
    this.tableHeight = window.innerHeight - 100;
  
    // localStorage.setItem("tableId",this.tableId)
    window.addEventListener("resize",()=>{
        this.tableHeight=window.innerHeight-200
        this.colWidth=window.innerwidth
    })
    this.getFromName()
    this.getFromData()
  },
  methods:{
      
        // 根据单据id请求对应字段接口
        getFromName(){
            this.tableData=[]
            this.tableNameData=[]
            console.log(1234)
            if(this.tableId!='' && this.tableId!=0){
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
                        nodeId: this.tableId,
                    }),
                }).then((res) =>{ 
                    if(res.data.code==200){
                        this.$getItem(this.tableId,(err,result)=>{
                            if(result){
                                this.tableNameData=result
                            }else{
                                for(let i in res.data.data){
                                    res.data.data[i].choose=true
                                }
                                this.tableNameData=res.data.data
                            }
                        })                       
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
        // 根据id请求对应的数据接口
        getFromData(){
            if(this.tableId!='' && this.tableId!=0){
                this.$axios({
                    method:'POST',
                    url:'/data/query/queryH',   
                    headers: {
                        "X-Requested-With": "XMLHttpRequest",
                        "Content-Type": "application/json",
                        "dataDbToken":localStorage.getItem("dataDbToken"),
                        "sysDbToken":localStorage.getItem("sysDbToken"),
                        "authToken":localStorage.getItem("userToken"),
                    },             
                    data:JSON.stringify({                        
                        nodeId: this.tableId,
                        pageSize: this.pageSize,
                        pageNum:this.pageNum,
                    }),
                }).then((res) =>{ 
                    if(res.data.code==200){
                        this.total=res.data.data.total
                        // 检测数据处理表头数据
                        this.tableData=res.data.data.list
                        this.loading=false                   

                    }else if(res.data.code==1002){                        
                        Toast.fail({message:res.data.msg,duration:800});
                        this.$router.push("/login")  
                    }else{
                        Toast.fail({message:res.data.msg,duration:800});
                    }
                }) 
            }         
        },
         // 分页组件切换条数
        handleSizeChange(val) {
            this.pageSize = val;
            this.getFromData()
        },
        //换页时重新请求
        handleCurrentChange(val){
            this.pageNum = val;
            this.getFromData()
        },
        // 跳转详情页
        toDetail(row, column, event){
            let rows=row
            localStorage.setItem("nodeId",this.tableId)
            localStorage.setItem("DjLsh",rows.DjLsh)
            this.$router.push({
                path:"/detail",  
            })

        },
        // 选中状态
        changeFun(val) {
            this.multipleSelection=val
            console.log(this.multipleSelection,val)
        },
        // 改变单条件多条件状态
        changeBtnStatus(){
            if(this.btnstatus=='单条件'){
                this.btnstatus='多条件'
                this.showModelContent=true
            }else{
                this.btnstatus='单条件'
                this.showModelContent=false
            }
        },
        // 搜索筛选内容
        toSearch(){
            this.showPopover=false           
            if(this.btnstatus=='单条件'){
                // 单条件的搜索
                if(this.tableId!='' && this.tableId!=0 &&this.selectValue!='' ){
                    let operator=''
                    if(this.method=='' || this.mehodStatus){
                       operator= this.changeSymbol(this.operator)
                    }else{
                        operator=this.changeSymbol(this.method)
                    }
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryH',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({                           
                            nodeId: this.tableId,
                            pageSize: this.pageSize,
                            pageNum:this.pageNum,
                            queryConditions:[{
                                column:this.selectValue,
                                operator:operator,
                                value:this.searchVal,
                            }]
                        }),
                    }).then((res) =>{ 
                        if(res.data.code==200){
                            this.total=res.data.data.total
                            // 检测数据处理表头数据
                            this.tableData=res.data.data.list
                            this.loading=false
                             this.chooseData=[]
                            this.selectValue=''
                            this.operator=''
                            this.searchVal=''

                        }else if(res.data.code==1002){
                            
                            Toast.fail({message:res.data.msg,duration:800});
                            this.$router.push("/login")  
                        }else{
                            Toast.fail({message:res.data.msg,duration:800});
                        }
                    }) 
                }         
            }else{
                 // 多条件的搜索
                if(this.chooseData.length>0){
                    //    循环处理条件表达式
                    let chooseData=JSON.parse(JSON.stringify(this.chooseData))
                    for(let i in chooseData){
                        chooseData[i].operator=this.changeSymbol(chooseData[i].operator)
                    }
                    this.$axios({
                        method:'POST',
                        url:'/data/query/queryH',   
                        headers: {
                            "X-Requested-With": "XMLHttpRequest",
                            "Content-Type": "application/json",
                            "dataDbToken":localStorage.getItem("dataDbToken"),
                            "sysDbToken":localStorage.getItem("sysDbToken"),
                            "authToken":localStorage.getItem("userToken"),
                        },             
                        data:JSON.stringify({     
                            linkOperator: this.radioVal=="并且"?'and':'or',                    
                            nodeId: this.tableId,
                            pageSize: this.pageSize,
                            pageNum:this.pageNum,
                            queryConditions:chooseData
                        }),
                    }).then((res) =>{ 
                        if(res.data.code==200){
                            this.total=res.data.data.total
                            // 检测数据处理表头数据
                            this.tableData=res.data.data.list
                            this.loading=false
                            this.chooseData=[]
                            this.selectValue=''
                            this.operator=''
                            this.searchVal=''
                        }else if(res.data.code==1002){                            
                            Toast.fail({message:res.data.msg,duration:800});
                            this.$router.push("/login")  
                        }else{
                            Toast.fail({message:res.data.msg,duration:800});
                        }
                    }) 
                }
            }
                                             
        },
        // 处理运算符
        changeSymbol(item){
            console.log(item)
            switch (item) {
                case '=':
                    return "EQ";
                    break;
                case '<>':
                    return "NE";
                    break;
                case '>=':
                    return "GE";
                    break;
                case '<=':
                    return "LE";
                    break;
                case '>':
                    return "GT";
                    break;
                case '<':
                    return "LT";
                    break;
                case '首部匹配':
                    return "HCN";
                    break;
                case '尾部匹配':
                    return "TCN";
                    break;
                case '完全匹配':
                    return "ACN";
                    break;        
            }
    
        },
        // 处理匹配方式
        chooseName(){
            for(let i in this.tableNameData){
                // console.log( this.tableNameData[i])
                for(let key in this.tableNameData[i]){
                    if(this.tableNameData[i][key]==this.selectValue){                     
                        if(this.tableNameData[i].xmDataType=='字符'){
                            this.mehodStatus=false
                        }else{
                            this.mehodStatus=true

                        }
                    }
                }
            }
            
        },
        // 取消筛选
        toCancel(){
            this.chooseData=[]
            this.selectValue=''
            this.operator=''
            this.searchVal=''
            this.showPopover=false
        },
        // 多条件添加
        addVal(){
            if(this.tableId!='' && this.tableId!=0 &&this.selectValue!='' ){
                let operator=''
                if(this.method==''  || this.mehodStatus){
                    operator= this.operator
                }else{
                    operator=this.method
                }
                let obj={
                    choose:false,
                    relationship:this.radioVal=="并且"?'and':'or', 
                    column:this.selectValue,
                    operator:operator,
                    value:this.searchVal,
                };
                this.chooseData.push(obj)
                this.selectValue=''
                this.operator=''
                this.searchVal=''
            }
        },
        // 删除筛选项
        handleDelete(index,row){
            this.chooseData.splice(index,1)
        },
        // 新增单据
        addData(){
            localStorage.setItem("nodeId",'')
            localStorage.setItem("DjLsh",'')
            localStorage.setItem("dataState",'add')
            this.$router.push({
                path:"/detail",                  
            })
        },
        // 预览单据
        seeData(){
            if(this.multipleSelection.length==1){
                localStorage.setItem("nodeId",this.tableId)
                localStorage.setItem("DjLsh",this.multipleSelection[0].DjLsh)
                localStorage.setItem("dataState",'see')
                this.$router.push({
                    path:"/detail",                  
                })
            }            
        },
        // 修改单据
        updateData(){
            if(this.multipleSelection.length==1){
                localStorage.setItem("nodeId",this.tableId)
                localStorage.setItem("DjLsh",this.multipleSelection[0].DjLsh)
                localStorage.setItem("dataState",'update')
                this.$router.push({
                    path:"/detail",                  
                })
            }     
        
        },
        // 改变表格显示项
        changeCheckBoxData(val,index){
            console.log(val,index)
            // this.tableNameData[index].choose= !this.tableNameData[index].choose
            // console.log(this.tableNameData[index].choose)
            this.$setItem(this.tableId,this.tableNameData,function(err){

            })
            this.$forceUpdate()
        }
    },
    
    beforeDestroy(){
        this.showPopover=false
    }
}
</script>

<style scoped lang="stylus">
.tableData
    width 100%
    padding-left 20px
    .btns
        width 100%
        height 50px
        display flex
        justify-content flex-start
        align-items center      
   
.operator
    width 130px

 .ModelContents
        border: 1px solid #999;
        padding: 15px;
        margin-bottom 20px
        .modelContent_header
            margin-bottom 20px
.searchVal
    width 215px

.method
    width 130px   

</style>
