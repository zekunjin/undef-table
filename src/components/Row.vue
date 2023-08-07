<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import { calcCssUnit } from '../utils/common'

interface TableColumn {
  align?: 'left' | 'right' | 'center'
  title: string
  dataIndex: string
  ellipsis?: boolean
  children: TableColumn[]
  width?: number
  fixed?: 'left' | 'right' | undefined
}

defineProps<{
  row: Record<string, any>
  cols: TableColumn[]
  height: number
}>()

const attrs = useAttrs()

const isFixedRight = (fixed?: 'left' | 'right') => fixed === 'right'
const isFixedLeft = (fixed?: 'left' | 'right') => fixed === 'left'

const rowStyle = computed(() => (attrs?.style || {}))
</script>

<template>
  <div
    v-for="({ dataIndex, fixed }) in cols"
    :key="row[dataIndex]"
    :style="{
      height: calcCssUnit(height),
      position: fixed ? 'sticky' : 'static',
      zIndex: fixed ? '9' : 'auto',
      right: isFixedRight(fixed) ? '0' : 'auto',
      left: isFixedLeft(fixed) ? '0' : 'auto',
      ...rowStyle
    }"
  >
    {{ row[dataIndex] }}
  </div>
</template>
