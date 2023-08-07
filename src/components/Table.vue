<script setup lang="ts">
import { useVirtualList } from '@vueuse/core'
import { ref, useSlots } from 'vue'
import { calcCssUnit } from '../utils/common'

interface TableColumn {
  align?: 'left' | 'right' | 'center'
  title: string
  dataIndex: string
  ellipsis?: boolean
  children: TableColumn[]
  width?: number
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
  dataSource: Record<string, any>[]
  scroll: TableScroll | undefined
  pagination: false | TablePagination | undefined
  itemHeight: ((i: number) => number) | number
}

const props = withDefaults(defineProps<Props>(), {
  rowKey: 'key',
  dataSource: () => [],
  scroll: () => ({})
})

const columns = ref<TableColumn[]>([])

const { header, body } = useSlots()

if (header) {
  const [{ children }] = header()
  if (Array.isArray(children)) {
    columns.value = children.map(({ props }: any) => ({
      align: props?.align || 'left',
      title: props?.title || props['data-index'],
      dataIndex: props['data-index'],
      ellipsis: props?.ellipsis || false,
      children: props?.children,
      width: props?.width
    }))
  }
}

const { list, containerProps, wrapperProps } = useVirtualList(props.dataSource, {
  itemHeight: props.itemHeight,
  overscan: 10
})
</script>

<template>
  <div v-bind="containerProps" :style="{ height: calcCssUnit(scroll?.y) }">
    <div v-bind="wrapperProps">
      <div
        :style="{
          display: 'grid',
          gridTemplateColumns: columns.map(({ width }) => width ? calcCssUnit(width) :'auto').join(' ')
        }"
      >
        <slot name="header" />

        <slot name="body" v-bind="{ rows: list || [], cols: columns || [] }" />
      </div>
    </div>
  </div>
</template>
