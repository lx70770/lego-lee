<template>
  <div class="content-container"><template-list :list="testData"></template-list></div>
</template>

<script lang='ts'>
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
import TemplateList from '../components/TemplateList.vue'
import { GlobalDataProps } from '../store'

export default defineComponent({
  name: 'Home',
  components: {
    TemplateList
  },
  setup() {
    const store = useStore<GlobalDataProps>()
    const testData = computed(() => store.state.templates.data)
    console.log(testData)

    return {
      testData
    }
  }
})
</script>

<style>
.content-container {
  background: #fff;
  padding: 0 24px 24px 30px;
  min-height: 85vh;
  max-width: 1200px;
  margin: 50px auto;
  width: 100%;
}
</style>