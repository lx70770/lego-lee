<template>
  <div class="editor-container">
    <router-link to="/">home</router-link>
    <a-layout>
      <a-layout-sider width="300" style="background: white">
        <div class="sidebar-container"></div>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-layout-content class="preview-container">
          <p>画布区域</p>
          <history-area />
          <div class="preview-list" id="canvas-area">
            <div class="page-container">
              <component v-for="component in components" :key="component.id" :is="component.name" v-bind="component.props" />
            </div>
          </div>
        </a-layout-content>
      </a-layout>
      <a-layout-sider width="300" style="background: white"> sdas </a-layout-sider>
    </a-layout>
  </div>
</template>

<script lang='ts'>
import { GlobalDataProps } from '@/store'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import LText from '../components/LText.vue'

export default defineComponent({
  components: {
    LText
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const components = store.state.editor.components
    return {
      components
    }
  }
})
</script>

<style>
.editor-container {
}

.preview-list {
  padding: 0;
  margin: 0;
  min-width: 375px;
  min-height: 200px;
  border: 1px solid #efefef;
  background: #fff;
  overflow-x: hidden;
  overflow-y: auto;
  position: fixed;
  margin-top: 50px;
  max-height: 80vh;
}

.preview-container {
  padding: 24px;
  margin: 0;
  min-height: 85vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
}
</style>