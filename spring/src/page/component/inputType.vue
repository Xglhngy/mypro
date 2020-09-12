<template>
    <!-- 数据格式组件 -->
   <div class="inputType">
       <!-- :style="{position:'fixed',fontSize:field.xmEditFontSize*1.2+'px',width:field.xmEditWidth*1.2+'px',heigth:field.xmEditHeight*1.2+'px',top:field.xmEditY*1.2+'px',left:field.xmEditX*1.2+'px',color:field.xmLabelColor}" -->
        <!-- 字符格式 -->
        <!-- <el-input :id="field.xmDm.toString()" :value="value" v-if="type=='字符' && status==''" @input="(value)=>changeData('string',value)" placeholder="请输入内容"></el-input> -->
        <input type="text" :value="value" v-if="type=='字符' && status==''" @input="changeData($event.target.value)" :style="{position:'fixed',fontSize:field.xmEditFontSize+'px',width:field.xmEditWidth*1.05+'px',heigth:field.xmEditHeight*1.06+'px',top:field.xmEditY*1.08+'px',left:field.xmEditX*1.08+'px',color:field.xmLabelColor}">
           <!-- 数据格式  -->
        <!-- <el-input :id="field.xmDm.toString()" :value="value" v-if="type=='数据' && status==''" @input="(value)=>changeData(value)" placeholder="请输入内容"></el-input> -->
        <input type="text" :value="value" v-if="type=='数据' && status==''" @input="changeData($event.target.value)" :style="{position:'fixed',fontSize:field.xmEditFontSize+'px',width:field.xmEditWidth*1.05+'px',heigth:field.xmEditHeight*1.06+'px',top:field.xmEditY*1.08+'px',left:field.xmEditX*1.08+'px',color:field.xmLabelColor}">

          <!-- 整数格式  -->
        <el-input :id="field.xmDm?field.xmDm.toString():''" :value="value" v-if="type=='整数' && status==''" @input="(value)=>changeData(value)" placeholder="请输入内容"></el-input>
        <input type="text" :id="field.xmDm.toString()" :value="value" v-if="type=='整数' && status==''"  @input="changeData($event.target.value)" placeholder="请输入内容" :style="{position:'fixed',fontSize:field.xmEditFontSize+'px',width:field.xmEditWidth*1.05+'px',heigth:field.xmEditHeight*1.06+'px',top:field.xmEditY*1.08+'px',left:field.xmEditX*1.08+'px',color:field.xmLabelColor}">

            <!-- 日时格式 -->
        <el-date-picker
            :id="field.xmDm?field.xmDm.toString():''"
            :value="value?value.toString():''"
            v-if="type=='日时' && status==''"
            @input="(value)=>changeData(value)"
            type="datetime"
            placeholder="选择日期时间">
        </el-date-picker>
        <!-- 日期格式 -->
        <el-date-picker
            style="max-width:200px;max-height:35px;"
            :id="field.xmDm?field.xmDm.toString():''"
            v-if="type=='日期' && status==''"
            :value="value?value.toString():''"
            align="right"
            type="date"
            @input="(value)=>changeData(value)"
            placeholder="选择日期">
        </el-date-picker>
        <!-- 选择框格式 -->
        <!-- <el-select 
            :id="field.xmDm.toString()"
            :value="value?value.toString():''"
            v-if="status!=''"
            @change="(value)=>changeData('string',value)"
            placeholder="请选择">              
            <el-option                
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select> -->
        <select :style="{position:'fixed',fontSize:field.xmEditFontSize+'px',width:field.xmEditWidth*1.05+'px',heigth:field.xmEditHeight*1.06+'px',top:field.xmEditY*1.08+'px',left:field.xmEditX*1.08+'px',color:field.xmLabelColor}" name="" :id="field.xmDm.toString()" :value="value?value.toString():''" @change="changeData($event.target.value)" v-if="status!=''">
            <option                
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </option>
        </select>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
    name: '',
    data() {
        return {
            dateVal:'',
            stringVal:'',
            input:'',
            status:'',
            optionValue:'',
            w:200,
            options:[               
            ],
            activeId:'',
            style:{},
            color:'red',
        }
    },
    props:["type","value","tableType",'field'],
    components: {
        
    },
    mounted(){
        // 当点击的为单据时
        if(this.tableType=='table'){
            // 设置input框的样式
            let obj={
                position:"fixed",
                fontSize:this.field.xmEditFontSize +'px',
                width:this.field.xmEditWidth*1.08 +'px',
                height:this.field.xmEditHeight*1.06 +'px',
                top:this.field.xmEditY*1.08 +'px',
                left:this.field.xmEditX*1.07 +'px',
            }
            $("#"+this.field.xmDm).css(obj)
            $("#"+this.field.xmDm).parent().css(obj)
            $("#"+this.field.xmDm).parent().parent().css(obj)
            // 处理选择框
            if(this.field.xz){
                this.status='xz'
                for(let i in this.field.xz.chooseItems){
                    // console.log(this.field.chooseItems[i])
                    let obj={
                        value:this.field.xz.chooseItems[i],
                        label:this.field.xz.chooseItems[i]
                    }
                    this.options.push(obj)
                }           
            }
        }else if(this.tableType=='query'){
            // 当点击的是查询的时候
            if(this.field.defaultValue){
                this.value=this.field.defaultValue
            }
        }
        
           

    },
    methods:{
        // 传递数据
        changeData(e){
            let val=e
            // 处理日时数据
            if(this.type=='日时'){
                if(val){
                    var d = new Date(val);
                    let date=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    // console.log(date,typeof(date))
                    val=date
                }
                
            }
            if(this.type=='日期'){   
                if(val){
                    var d = new Date(val);
                    let date=d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate() 
                    // console.log(date,typeof(date))
                    val=date
                }
            }
            // 处理浮点数书据
            if(this.type=='数据'){
                val=this.changeNumber(e)
            } 
             // 处理整数数书据
            if(this.type=='整数'){
                val=this.toNumber(e)
            }  
            // 传递数据给父组件
            this.$emit('input', val)
            this.$forceUpdate()
        },
        // 正则匹配数字检验小数
        changeNumber(val){
           // 先把非数字的都替换掉，除了数字和.
            let number = val.replace(/[^\d.]/g, '');
            // 必须保证第一个为数字而不是.
            number = number.replace(/^\./g, '');
            // 保证只有出现一个.而没有多个.
            number = number.replace(/\.{2,}/g, '');
            // 保证.只出现一次，而不能出现两次以上
            number = number.replace('.', '$#$').replace(/\./g, '').replace('$#$', '.');
            let index = -1
            for (let i in number) {
                if (number[i] === '.') {
                    index = id
                }
                if (index !== -1) {
                    if (i - index > this.float) {
                        number = number.substring(0, number.length - 1)
                    }
                }
            }
            return number
        },
        // 正则匹配整数
        toNumber(val){　　
    　　　   let number=val.replace(/[^\.\d]/g,'');
             number=number.replace('.','');
             return number
    　　}
    }
}
</script>

<style scoped>
.el-date-editor .el-input__icon{
    line-height:normal;
    width:13px;
}
.el-date-editor .el-input__inner{
    padding: 0 14px;
}
 select{
    caret-color: #666;
}
.el-input input{
    max-height: 35px;
}

</style>
