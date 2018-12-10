<template>
  <div class="menu-wrapper">
    <template v-for="(item,index) in menu">
      <el-submenu v-if="item.children"  :index="filterPath(item.name,index)" :key="item.name">
        <template slot="title">
          <i class="iconfont iconfontMenu" :class="item.icon"></i>
          <span slot="title" class="h-dib h-mt5"  :class="{'el-menu--display':isCollapse}">{{item.label}}</span>
        </template>
        <template v-for="(child,cindex) in item.children">
          <el-menu-item :index="filterPath(child.href,cindex)" @click="open(child)" v-if="child" :key="cindex">
            <i class="iconfont iconfontMenu"  :class="child.icon" style="padding-left:8px;"></i>
            <span slot="title"  class="h-dib h-mt5" >{{child.label}}</span>
          </el-menu-item>
          <sidebar-item v-else :menu="[child]" :key="cindex" :isCollapse="isCollapse"></sidebar-item>
        </template>
      </el-submenu>
      <el-menu-item v-else  :index="filterPath(item.href,index)" @click="open(item)" :key="item.label">
        <i class="iconfont iconfontMenu" :class="item.icon"></i>
        <span slot="title" class="h-dib h-mt5">{{item.label}}</span>
      </el-menu-item>
    </template>
  </div>
</template>
<script>

import { resolveUrlPath } from "@/util/util";
import { getStore } from '@/util/store';
import { mapState,mapGetters } from "vuex";
export default {
  name: "SidebarItem",
  data() {
    return {};
  },
  props: {
    menu: {
      type: Array
    },
    isCollapse: {
      type: Boolean
    }
  },
  created() {

  },
  mounted() {},
  computed: {},
  methods: {
    filterPath(path, index) {
      return path == null ? index + "" : path;
    },
    open(item) {
      if(item.label == 'Dubbo服务'){
        window.open('http://192.168.203.217:8099/');
      }else if(item.label == '日志查询'){
        window.open('http://192.168.203.131:8080/head/');
      }
      else{
        this.$router.push({
          path: resolveUrlPath(item.href, item.label),
          query: item.query
        });
      }

    }
  }
};
</script>
<style lang="scss" scoped>
  .iconfontMenu{font-size:25px !important;}

</style>

