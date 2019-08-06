<template>
  <div style="height:100%;">
    <el-container style="height:100%;">
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
        <el-row style="height:100%;">
          <baidu-map class="bm-view" :zoom="zoom" :center="center" @ready="handler">
            <bm-geolocation anchor="BMAP_ANCHOR_BOTTOM_RIGHT" :showAddressBar="true" :autoLocation="true"></bm-geolocation>
            <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
            <bm-marker v-for="(item,index) in peopleData" :key="index" :position="item.position"  animation="BMAP_ANIMATION_BOUNCE">
              <bm-label :content="item.content" :labelStyle="{color: 'blue', fontSize : '24px'}" :offset="{width: -15, height: 30}"/>
            </bm-marker>
          </baidu-map>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>

  import {UserData} from '@/const/user/data';
  export default {
    name: 'baidumap',
    components:{
    },
    data() {
      return {
        activeIndex2:'0',
        center: {lng: 0, lat: 0},
        zoom: 3,
        peopleData:UserData
      };
    },
    created(){

    },
    mounted(){
      this.lng = 116.404
      this.lat = 39.915
      this.zoom = 15
    },
    methods: {
      handler ({BMap, map}) {
        console.log(BMap, map)
        this.center = "厦门"
        // this.zoom = 15
      },
      handleSelect(){

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .bm-view{
    width:100%;
    height:100%;
  }
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
    height:100%;
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
