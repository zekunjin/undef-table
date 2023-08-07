<script setup lang="ts">
import { calcCssUnit } from '../utils/common'

interface TableColumn {
  align?: 'left' | 'right' | 'center'
  title: string
  dataIndex: string
  ellipsis?: boolean
  children: TableColumn[]
  width?: number
}

defineProps<{
  row: Record<string, any>
  cols: TableColumn[]
  height: number
}>()
</script>

<template>
  <div v-for="({ dataIndex }) in cols" :key="row[dataIndex]" :style="{ height: calcCssUnit(height) }">
    {{ row[dataIndex] }}
  </div>
</template>
