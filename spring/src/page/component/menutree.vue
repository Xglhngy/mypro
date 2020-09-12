<template>  
    <!-- 侧边菜单页递归组件 -->
  <div class="menutree">
    <div class>
        <label v-for="item in data" :key="item.nodeId">
            <el-submenu :index="String(item.nodeId)" v-if="item.children.length && !item.needHide">
                <template slot="title">
                    <!-- <img :src="getImgUrl(item.icon)" alt v-if="item.icon" /> -->
                    <i :class="icon1"></i>
                    <span>{{item.nodeCaption}}</span>
                </template>
                <label>
                    <tree-menus :data="item.children"></tree-menus>
                </label>
            </el-submenu>
            <el-menu-item :index="String(item.nodeId)" v-if="!item.children.length  && !item.needHide">
                <i :class="icon"  v-if="item.iconNo"></i>   
                <span
                    slot="title"
                    @click="toDetail(item)"
                    style="display:inline-block;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;white-space : nowrap;"
                >{{item.nodeCaption}}</span>
            </el-menu-item>
        </label>
    </div>
   </div>
</template>
<script type="text/ecmascript-6">
import Vue from 'vue';
import { Toast } from 'vant';
import bus from '@/assets/js/bus'
export default {
    props: ["data"],
    name: 'treeMenus',
    data() {
        return {
            icon:'el-icon-document',
            icon1:"el-icon-folder-add"
        }
    },
    components: {
        // menuTree

    },
    methods:{
        toDetail(item){
            bus.$emit('page', item)         
        },
    }  
}
</script>

<style scoped lang="stylus">
</style>

