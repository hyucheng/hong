<template>
  <div>
    <el-input v-model="name" placeholder="测试啦啦"></el-input>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      name:''
    }
  },
  created(){
    alert(1);
  },
  methods: {

  }
}
</script>

<style>

</style>
