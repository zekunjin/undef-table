<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  align?: 'left' | 'right' | 'center'
  title: string
  dataIndex: string
  ellipsis?: boolean
  children?: Props[]
  width?: number | string | undefined
  fixed?: 'left' | 'right' | undefined
}

const props = withDefaults(defineProps<Props>(), {
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
