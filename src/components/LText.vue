<template>
  <component :is="tag" :style="styleProps" class="l-text-component">
    {{ text }}
  </component>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { pick } from 'lodash-es'

export default defineComponent({
  name: 'l-text',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    text: {
      type: String
    },
    fontSize: {
      type: String
    }
  },
  setup(props) {
    const styleProps = computed(() => pick(props, ['fontSize']))
    return {
      styleProps
    }
  }
})
</script>

<style >
h2,
p {
}
.l-text-component {
  margin-bottom: 0;
}
button.l-text-component {
  padding: 5px 10px;
  cursor: pointer;
}
.l-text-component {
  box-sizing: border-box;
  white-space: pre-wrap;
  position: relative !important;
}
</style>