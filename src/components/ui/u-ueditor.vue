<template>
  <div class="u-ueditor">
    <vue-ueditor v-model="html" :config="config" ref="ueditor"></vue-ueditor>
    <template v-if="preview">
      <el-button icon="el-icon-view" type="text" @click="view">点击预览文字效果</el-button>
      <el-dialog
        class="u-ueditor-dialog"
        title="预览文字效果"
        :visible.sync="visible">
        <iframe
          :id="id"
          class="u-ueditor-iframe"
          ref="iframe"
          @close="close"></iframe>
      </el-dialog>
    </template>
  </div>
</template>

<script>
import vueUeditor from '@/components/ui/vue-ueditor-wrap';
import { mapGetters } from 'vuex';

export default {
  name: 'u-ueditor',
  components: {
    vueUeditor
  },
  props: {
    value: String,
    disabled: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: true
    },
    word: {
      type: Boolean,
      default: true
    },
    maxTextLength: {
      type: Number,
      default: 1e3
    }
  },
  data(){
    return {
      id: 'iframe' + Math.ceil(Math.random() * 1e5),
      html: '',
      visible: false,
      empty: true,
      config: {
        imageUrl: '/fileUpload',
        toolbars: [[
          'undo',
          'redo',
          'fontfamily',
          'fontsize',
          'bold',
          'italic',
          'underline',
          'justifyleft',
          'justifycenter',
          'justifyright',
          'insertorderedlist',
          'formatmatch',
          'link',
          'unlink',
          'simpleupload'
        ]],
        readonly: this.disabled,
        enableAutoSave: false,
        autoSyncData: false,
        initialFrameWidth: '100%',
        initialFrameHeight: 110,
        minFrameWidth: 100,
        elementPathEnabled: false,
        wordCount: this.word,
        maximumWords: this.maxTextLength,
        fontfamily: [
          { label:'',name:'songti',val:'宋体,SimSun'},
          { label:'',name:'yahei',val:'微软雅黑,Microsoft YaHei'},
          { label:'',name:'kaiti',val:'楷体,楷体_GB2312, SimKai'},
          { label:'',name:'lishu',val:'隶书, SimLi'},
          { label:'',name:'heiti',val:'黑体, SimHei'}
        ],
        fontsize: [8, 9, 10, 12, 14, 16, 18, 20, 24, 32, 48, 72],
        autosave: false
      }
    }
  },
  created(){
    this.html = this.value;
  },
  methods: {
    createStyle(doc){
      const items = {
        body: {
          margin: 0,
          padding: 0,
          overflow: 'hidden'
        }
      };
      const html = [];
      for(let tag in items){
        const stys = items[tag];
        html.push(`${tag}{`);
        for(let prop in stys){
          html.push(`${prop}: ${stys[prop]};`)
        }
        html.push(`}`);
      }
      if(html.length){
        const style = document.createElement('style');
        style.innerText = html.join('');
        doc.head.appendChild(style);
      }
    },
    createScript(doc){
      const html = [];
      html.push(`window.parent.document.getElementById('${this.id}').style.height = document.body.offsetHeight + 'px';`);
      if(html.length){
        const script = document.createElement('script');
        script.innerText = html.join('');
        doc.body.appendChild(script);
      }
    },
    view(){
      this.visible = true;
      this.$nextTick(() => {
        const iframe = this.$refs.iframe;
        const doc = iframe.contentDocument;
        this.createStyle(doc);
        doc.body.innerHTML = this.html;
        this.createScript(doc);
      });
    },
    close(){
      this.$refs.iframe.style = '';
    }
  },
  watch: {
    html(value){
      this.$emit('input', value);
      this.empty = !value;
    },
    value(value){
      this.html = value;
    },
    empty(value){ //触发表单验证信息
      let vm = this.$refs.ueditor;
      while('elForm' in vm ^ 1){
        vm = vm.$parent;
        if(vm.$root === vm) return;
      }
      vm.isRequired === true && vm.elForm.validateField(vm.labelFor);
    },
  }
}
</script>
