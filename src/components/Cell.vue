<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { calcCssUnit } from '../utils/common'

defineProps<{
  fixed?: 'left' | 'right' | undefined
  height: number
}>()

const attrs = useAttrs()

const isFixedRight = (fixed?: 'left' | 'right') => fixed === 'right'
const isFixedLeft = (fixed?: 'left' | 'right') => fixed === 'left'

const rowStyle = computed(() => (attrs?.style || {}))
</script>

<template>
  <div
    :style="{
      height: calcCssUnit(height),
      position: fixed ? 'sticky' : 'static',
      zIndex: fixed ? '9' : 'auto',
      right: isFixedRight(fixed) ? '0' : 'auto',
      left: isFixedLeft(fixed) ? '0' : 'auto',
      ...rowStyle
    }"
  >
    <slot />
  </div>
</template>
