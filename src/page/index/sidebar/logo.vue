<template>
  <div class="logo">
    <transition name="fade">
      <span v-if="isCollapse" class="logo_title is-bold " key="0" :class="{'is-text':!type,'is-img':type}">
        <template v-if="type">
          <img :src="website.logo" width="40" height="40" />
        </template>
        <template v-else>
          {{website.logo}}
        </template>
      </span>
    </transition>
    <img src="../../../assets/img/logo1.png" alt="" style="margin-right:10px;">
    <transition-group name="fade">
      <template v-if="!isCollapse">
        <span class="logo_title is-bold" key="1">{{website.title}} </span>
        <span class="logo_subtitle" style="letter-spacing: 3px;display: inline-block;" key="2">{{website.author}}</span>
      </template>
    </transition-group>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "logo",
  data() {
    return {};
  },
  props: ["isCollapse"],
  computed: {},
  created() {},
  computed: {
    ...mapGetters(["website"]),
    type: function(val) {
      return this.website.logo.indexOf("static") != -1;
    }
  },
  methods: {}
};
</script>

<style scoped="scoped" lang="scss">
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter-active {
  transition: opacity 2.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.logo {
  position: relative;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  align-items: center;
  width: 230px;
  height: 64px;
  line-height: 64px;
  background: #002140;
  color: #fdfdfd;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  overflow: hidden;
  box-sizing: border-box;
}
.logo_title {
  padding: 0 5px 0 0;
  color: #409eff;
  font-size: 28px;
  &.is-bold {
    font-weight: 700;
  }
}
.is-text {
  position: absolute;
  top: 0;
  left: 20px;
}
.is-img {
  position: absolute;
  top: 10px;
  left: 10px;
}
.logo_subtitle {
  font-size: 16px;
  padding-top: 5px;
}

.logo-img-style{
  width:50px;
  height:50px;
  display:inline-block;
  margin-right:10px;
  background: url("../../../assets/img/logo.png") no-repeat 0 5px;
}
</style>
