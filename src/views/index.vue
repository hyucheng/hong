<template>
  <div>
    <el-container>
      <el-header>
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">js问题集</el-menu-item>
          <!--<el-submenu index="2">-->
          <!--<template slot="title">我的工作台</template>-->
          <!--<el-menu-item index="2-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
          <!--<el-submenu index="2-4">-->
          <!--<template slot="title">选项4</template>-->
          <!--<el-menu-item index="2-4-1">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-4-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-4-3">选项3</el-menu-item>-->
          <!--</el-submenu>-->
          <!--</el-submenu>-->
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://docschina.org/#test" target="_blank">资源库</a></el-menu-item>
        </el-menu>
      </el-header>
      <el-main>
        <el-row style="height:50px;line-height:50px;">
          <el-col :span="24" style="background: #fff;margin-top:30px;">
            <el-col v-for="(item,index) in qData" :key="index" style="box-sizing: border-box;">
              <el-col :span="3" style="padding-right:20px;text-align: right;">
                NO.{{item.sId}}：
                <div style="text-align: right;">答：</div>
              </el-col>
              <el-col :span="21" style="text-align: left;">
                <div style="color:#1987ff">{{item.content}}</div>
                <div>{{sData[index].content}}</div>
              </el-col>
            </el-col>
          </el-col>
          <!--<el-col :span="12" style="text-align: left">-->
            <!--<el-col v-for="(item,index) in sData" :key="index">-->
              <!--{{item.aId}}：{{item.content}}-->
            <!--</el-col>-->
          <!--</el-col>-->
        </el-row>
      </el-main>
    </el-container>


  </div>
</template>

<script>
  import uUeditor from '@/components/ui/u-ueditor';
  import {SWebJsData} from "@/const/subject/webJs";
  import {AWebJsData} from "@/const/answer/webJs";

  export default {
    name: 'index',
    components:{
      uUeditor
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1',
        qData:SWebJsData,
        sData:AWebJsData,
        formData: {
          noticeContent: '',
        },
      };
    },
    created(){

    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-header{
    padding:0;
  }
  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    /*text-align: center;*/
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
