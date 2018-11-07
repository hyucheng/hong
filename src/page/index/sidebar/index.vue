<template>
  <div class="sidebar-container" :class="{'is-active':isCollapse}">
    <logo :isCollapse="isCollapse"></logo>
    <el-menu unique-opened :default-active="tag.value" class="el-menu-vertical-demo" mode="vertical" :show-timeout="200" background-color="#00142a" text-color="hsla(0,0%,100%,.65)" active-text-color="#409eff" :collapse="isCollapse">
      <sidebar-item :menu="menu.children" :isCollapse="isCollapse"></sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import MENU from "@/mock/menu";
import { setUrlPath } from "@/util/util";
import { mapGetters } from "vuex";
import SidebarItem from "./sidebarItem";
import logo from "./logo";
import { getStore } from '@/util/store';

export default {
  name: "sidebar",
  components: { SidebarItem, logo },
  data() {
    return {
        index:''
    };
  },
  created() {
    this.$store.dispatch("GetMenu",'0').then(data => {});
    this.initCollapse(this.$route);
  },
  computed: {
    ...mapGetters(["menu","tag", "isCollapse"]),
    nowTagValue: function() {
      return setUrlPath(this.$route);
    }
  },
  mounted() {},
  methods: {
    initCollapse(to,from){
      if(to.path.indexOf('/wel/index') == 0){
        this.isCollapse || this.$store.commit('SET_COLLAPSE');
      } else{
        this.isCollapse && this.$store.commit('SET_COLLAPSE');
      }
    }
  },
  watch: {
    '$route'(to,from){
      this.initCollapse(to,from);
    }
  }
};
</script>
<style lang="scss" scoped>
  .el-menu--inline{background:#00142a;}
</style>

