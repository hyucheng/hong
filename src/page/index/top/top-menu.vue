<template>
  <div class="pull-auto top-menu">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <template v-for="(item,index) in items">
        <el-menu-item :index="item.index+''" @click.native="openMenu(item,index)" :key="item.index">{{item.label}}</el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { resolveUrlPath } from "@/util/util";
import { mapState, mapGetters } from "vuex";
import { getStore } from '@/util/store';

export default {
  name: "top-menu",
  data() {
    return {
      activeIndex: '0',
      items: [
//        {
//          label: "首页",
//          href: "/wel/index",
//          parentId: 0
//        },
//        {
//          label: "区域运营",
//          href:'/operateManage/businessOperate/activeManage',
//          parentId: 1
//        },
//        {
//          label: "平台运营",
//          href: "/platformManage/areaManage",
//          parentId: 2
//        },
//        /*{
//          label: "服务管理",
//          href: "/operateManage/areaManage",
//          parentId: 3
//        },
//        {
//          label: "运维管理",
//          href: "/operateManage/areaManage",
//          parentId: 4
//        },*/
//        {
//          label: "系统管理",
//          href: "/systemManage/appBaseManage/baseActiveConfig",
//          parentId: 3
//        }
      ],
      index:'0'
    };
  },
  created() {
    this.initOpen();
    this.routeActive(this.$route);

  },
  computed: {
    ...mapGetters(["tagCurrent", "menu"])
  },
  methods: {
    initOpen(){
      this.items = getStore({name:'menu'});
      this.index = this.queryMenu(this.$route);
      if(this.index != -1){
        this.openMenu(this.items[this.index],this.index);
      }else{
        this.openMenu(this.items[0],0);
        let item = {value :'/wel/index'};
        this.$store.commit("DEL_TAG", item);
      }
    },
    openMenu(item,index) {
      this.$store.dispatch("GetMenu", index).then(res => {
//        let itemActive,
//          childItemActive = 0;
//        if (item.href) {
//          itemActive = item;
//        } else {
//          if (this.menu[childItemActive].length == 0) {
//            itemActive = this.menu[childItemActive];
//          } else {
//            itemActive = this.menu[childItemActive].children[childItemActive];
//          }
//        }
        this.$router.push({
          path: resolveUrlPath(item.href, item.label)
        });
      });
    },
    queryMenu(route){
      const matched = route.matched;
      let index = -1;
      this.items.some(({
        href
      }, i) => {
        return matched.some(({
          path
        }) => {
          if(href.indexOf(path) == 0){
            index = i;
            return true;
          }
        });
      });
      return index;
    },
    routeActive(route){
      const index = this.queryMenu(route);
      if(index != -1){
        this.activeIndex = this.items[index].index + '';
      }
    }
  },
  watch: {
    '$route'(to, from){
      this.routeActive(to);
    }
  }
};
</script>

<style scoped="scoped" lang="scss">
.top-menu {
  margin-top: -4px;
  box-sizing: border-box;
}
</style>
