<template>
  <div class="top text">
    <div class="top-button is-left">
      <!-- breadcrumb按钮和面包屑 -->
      <div class="tags-breadcrumb">
        <i class="icon-shensuo1 tag-collapse shensuoStyle" :class="[{ 'tag-collapse_right': isCollapse }]" @click="showCollapse"></i>
        <!-- <top-breadcrumb class="tags-breadcrumb-list"></top-breadcrumb> -->
      </div>
    </div>
    <h1 class="top-title">
      <topMenu></topMenu>
    </h1>
    <div class="top-button is-right">
      <el-tooltip class="item" effect="dark" content="主题色" placement="bottom">
        <span class="top-item">
          <top-theme></top-theme>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="锁屏" placement="bottom">
        <span class="top-item">
          <top-lock></top-lock>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" :content="isFullScren?'退出全屏':'全屏'" placement="bottom">
        <span class="top-item">
          <i class="icon-quanping quanpingStyle"  @click="handleScreen"></i>
        </span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="用户头像" placement="bottom">
        <img class="top-userImg" src="https://gitee.com/uploads/61/632261_smallweigit.jpg">
      </el-tooltip>
      <el-dropdown>
        <span class="el-dropdown-link">
          {{token.areaOperName}}
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <!--<el-dropdown-item>
            <div @click="dialogFormVisible = true">个人信息</div>
          </el-dropdown-item>-->
          <el-dropdown-item @click.native="logout" divided>退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div>
        <!--<el-dialog title="收货地址" :visible.sync="dialogFormVisible" style="z-index:6666">
          <el-form :model="form">
            <el-form-item label="活动名称" label-width="120px">
              <el-input v-model="form.name" auto-complete="off"></el-input>
            </el-form-item>
            <el-form-item label="活动区域" label-width="120px">
              <el-select v-model="form.region" placeholder="请选择活动区域">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
              </el-select>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>-->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { fullscreenToggel, listenfullscreen } from "@/util/util";
import topLock from "./top-lock";
import topMenu from "./top-menu";
import topBreadcrumb from "./top-breadcrumb";
import topTheme from "./top-theme";
export default {
  components: { topLock, topMenu, topBreadcrumb, topTheme },
  name: "top",
  data() {
    return {
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    };
  },
  filters: {},
  created() {},
  mounted() {
    listenfullscreen(this.setScreen);
  },
  computed: {
    ...mapGetters([
      "token",
      "userInfo",
      "isFullScren",
      "tagWel",
      "tagList",
      "isCollapse",
      "tag"
    ])
  },
  methods: {
    handleScreen() {
      fullscreenToggel();
    },
    showCollapse() {
      this.$store.commit("SET_COLLAPSE");
    },
    setScreen() {
      this.$store.commit("SET_FULLSCREN");
    },
    logout() {

    }
  }
};
</script>

<style lang="scss" scoped>
  .quanpingStyle{font-size:1.4rem !important;text-align: center;}
  .shensuoStyle{font-size:2rem !important;text-align: center;}
</style>

