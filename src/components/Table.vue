<script setup lang="ts">
import { useVirtualList } from '@vueuse/core'
import { calcCssUnit, isFunction } from '../utils/common'

interface TableColumn {
  title: string
  dataIndex: string
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
  rowKey: string
  columns: TableColumn[]
  dataSource: Record<string, any>[]
  scroll: TableScroll | undefined
  pagination: false | TablePagination | undefined
  itemHeight: ((i: number) => number) | number
  itemWidth: ((i: number) => number) | number
}

const props = withDefaults(defineProps<Props>(), {
  rowKey: 'key',
  columns: () => [],
  dataSource: () => [],
  scroll: () => ({}),
  itemHeight: 0
})

const { list, containerProps, wrapperProps } = useVirtualList(props.dataSource, {
  itemHeight: props.itemHeight,
  itemWidth: props.itemWidth,
  overscan: 10
})

const calcItemHeight = (index: number) => {
  if (isFunction(props.itemHeight)) { return props.itemHeight(index) }
  return calcCssUnit(props.itemHeight)
}
</script>

<template>
  <div v-bind="containerProps" :style="{ height: calcCssUnit(scroll?.y) }">
    <div v-bind="wrapperProps">
      <div
        :style="{
          display: 'grid',
          gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))`
        }"
      >
        <div v-for="col in columns" :key="col.dataIndex" :style="{ position: 'sticky', top: 0 }">
          {{ col.title }}
        </div>

        <template v-for="{ data, index } in list" :key="data.key">
          <div v-for="({ dataIndex }) in columns" :key="data[dataIndex]" :style="{ height: calcItemHeight(index) }">
            {{ data[dataIndex] }}
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
