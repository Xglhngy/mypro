<template>
    <!-- 首页 -->
     
   <div class="springR_index">  
        <el-row class="springR_content">
            <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit">
                <!-- 头部标签栏 -->
                <el-tab-pane
                    :key="item.name"
                    v-for="(item,index) in editableTabs"
                    :label="String(item.title)"
                    :name="String(item.name)"
                >
                {{item.content}}
                </el-tab-pane>

                <div class="content">        
                    <!-- 数据表格    -->
                    <table-data :tableId="editableTabsValue" v-if="!showSlide && tableDataState=='table'"></table-data>
                    <query-data :tableId="editableTabsValue" v-if="!showSlide && tableDataState=='query'"></query-data>
                    <!-- 侧边栏 -->
                    <el-row class="tac springR_slideRow" v-show="showSlide">
                        <el-col :span="6" class='springR_slideCol'>  
                            <el-menu
                                class="el-menu-vertical-demo"
                                :default-active="activeIndex"
                                @open="handleOpen"
                                @close="handleClose"
                                unique-opened
                                background-color="#545c64"
                                text-color="#fff"
                                :collapse="isCollapse"
                                active-text-color="#ffd04b">
                                <label>
                                    <menu-tree :data="menus"></menu-tree>
                                </label>
                            </el-menu> 
                        </el-col>                                              
                    </el-row>
                </div>
            </el-tabs>
        </el-row>      
   </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue';
import { Toast } from 'vant';
import menuTree from '@/page/component/menutree'
import bus from '@/assets/js/bus'
import TableData from '@/page/tableData/tableData'
import queryData from '@/page/queryData/queryData'
export default {
    name: '',
    data() {
        return {
            isCollapse: false,
            activeIndex: '1',//选中的菜单
            // activeIndex2: '1',
            editableTabsValue: '',//当前选中的标签
            showSlide:true, //是否显示侧边栏
            editableTabs: [
                {
                name:"0",
                title:"主菜单"
                }

            ],
            tableDataState:'',
            tabIndex: 2,
            name:{},
            menus: [],
        }
    },
    components: {
       menuTree, 
       TableData,  
       queryData
    },
    activated() {        
        if(!this.$route.meta.keepAlive){ //isUseCache 时添加中router中的元信息，判读是否要缓存            
            if(localStorage.getItem('editableTabsValue')){
                this.editableTabsValue=localStorage.getItem('editableTabsValue')
            }
        }
    },
    
    mounted(){
        // 获取目录结构
        this.menus=JSON.parse(localStorage.getItem("menuList"))[0].children
        for(let i in this.menus){
            if(this.menus[i].nodeCaption=="启动"){
                this.menus.splice(i,1)
            }
        }
        if(this.menus.length<=0){
            this.$router.push("/login")
        }
         // 检测点击菜单栏时传递过来的tab值
        bus.$on('page', (data) => {
            if(data.functions.indexOf("查询")!='-1'){
                this.tableDataState='query'
            }else{
               
                this.tableDataState='table'
            } 
            //如果标签栏没有的话填充标签栏
            if(this.findIndexByKeyValue(this.editableTabs,'name',String(data.nodeId))==-1){
                // let newTabName = ++this.tabIndex + '';
                this.editableTabs.push({
                    title: data.nodeCaption,
                    name: String(data.nodeId),       
                });
                this.editableTabsValue = String(data.nodeId);
                if(this.editableTabsValue!=0){
                    localStorage.setItem("editableTabsValue",this.editableTabsValue)
                }

            }else{
                //如果有的情况下绑定标签显示值
                this.editableTabsValue=String(data.nodeId);
                if(this.editableTabsValue!=0){
                    localStorage.setItem("editableTabsValue",this.editableTabsValue)
                }
            }
              console.log( this.editableTabsValue)
            
        }) 
    },
    methods: {
        // 显示隐藏侧边栏
        changeIsCollapse(){            
            this.isCollapse=!this.isCollapse
            if(this.isCollapse){
                $(".springR_slideCol").animate({
                    width:'64px',
                },300)
                // $(".springR_slideCol").css('width','64px')
            }else{
                 $(".springR_slideCol").animate({
                    width:'210px',
                },300)
                // $(".springR_slideCol").css('width','210px')
            }
        },
        toComment(){
            this.$router.push({
                path:"/content"
            })
        },
        // 展开菜单
        handleOpen(key, keyPath) {
           
        },
        // 合上菜单
        handleClose(key, keyPath) {
           
        },       
        // 删除头部标签时
        handleTabsEdit(targetName, action){
            if(action === 'remove'){
                // 如果不是首页的菜单标签的话点击直接关闭
                if(targetName!='0'){
                    let tabs = this.editableTabs;
                    let activeName = this.editableTabsValue;            
                    if (activeName === targetName) { //如果删除的是当前显示标签的话
                        tabs.forEach((tab, index) => {
                            if (tab.name === targetName) {
                                let nextTab = tabs[index + 1] || tabs[index - 1]; // 判断当前的值如何前后有值的话拿前后的值改变显示的tab
                                if (nextTab) {
                                    activeName = nextTab.name;
                                }
                            }
                        });
                    }
                    this.editableTabsValue = activeName;
                    this.editableTabs = tabs.filter(tab => tab.name !== targetName); 
                }                
            }        
        },
        // 查看是否有重复的值
        findIndexByKeyValue(arr, key, valuetosearch) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i][key] == valuetosearch) {
                    return i;
                }
            }
            return -1;         

        },
        // 点击主菜单显示菜单栏，点击其他的话显示单据
        showFromData(){
            if(this.editableTabsValue==0){
                this.showSlide=true
            }else{
                this.showSlide=false
            }
        }
    },
    watch:{
        editableTabsValue(){
            this.showFromData()
        }
    }  
}
</script>

<style scoped lang="stylus">

.springR_index    
    height 100%
    min-width 1000px
   
    .springR_slideRow
        height 100%
        display flex
        .springR_contentRow
            height 60px
            width 100%
            border-bottom 1px solid #f0f0f0
            .springR_contentCol
                height 100%
                .springR_control
                    width 50px
                    height 100%
                    display flex
                    align-items center
                    margin-left 20px
                    .springR_userData
                        display flex
                        justify-content flex-end
                        align-items center
                         .springR_usernameBox .springR_username
                            text-align right 

        .springR_slideCol
            height 100%
            
            background #545c64
            .el-menu-vertical-demo:not(.el-menu--collapse) {
                
            }
            // 内容 
        .springR_content{
            width 100%            
            display inline-block
        }    


   
        
  
</style>
