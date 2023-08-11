<script setup lang="ts">
import { computed } from 'vue'
import type { TableColumn } from '../types'

const props = withDefaults(defineProps<TableColumn>(), {
  align: 'left',
  width: 'auto',
  children: undefined,
  fixed: undefined
})

const isFixedRight = computed(() => props.fixed === 'right')
const isFixedLeft = computed(() => props.fixed === 'left')
</script>

<template>
  <div :style="{ position: 'sticky', top: 0, right: isFixedRight ? 0 : 'auto', left: isFixedLeft ? 0 : 'auto', zIndex: fixed ? '99' : 'auto', }">
    <slot />
  </div>
</template>
