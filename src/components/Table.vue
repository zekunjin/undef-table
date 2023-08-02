<script setup lang="ts">
import { isNumber } from '../utils/common'

interface TableColumn {
  title: string
  dataIndex: string
  height: number | string
}

interface TableScroll {
  x?: string | number
  y?: string | number
}

interface TablePagination {
  current: number
  pageSize: number
  total: number
}

interface Props {
  columns: TableColumn[]
  dataSource: Record<string, any>[]
  scroll: TableScroll | undefined
  pagination: false | TablePagination | undefined
}

withDefaults(defineProps<Props>(), {
  columns: () => [],
  dataSource: () => [],
  scroll: () => ({})
})
</script>

<template>
  <div
    :style="{
      display: 'grid',
      gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`,
      height: isNumber(scroll?.y) ? `${scroll.y}px` : scroll?.y,
      overflowX: scroll?.x ? 'auto' : 'hidden',
      overflowY: scroll?.y ? 'auto' : 'hidden',
    }"
  >
    <div v-for="col in columns" :key="col.dataIndex" :style="{ position: 'sticky', top: 0 }">
      {{ col.title }}
    </div>

    <template v-for="row in dataSource" :key="row.key">
      <div
        v-for="({ dataIndex, height }) in columns"
        :key="row[dataIndex]"
        :style="{
          height: isNumber(height) ? `${height}px` : height
        }"
      >
        {{ row[dataIndex] }}
      </div>
    </template>
  </div>
</template>
