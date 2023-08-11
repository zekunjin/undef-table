<script setup lang="ts">
import { ref, useSlots, watch } from 'vue'
import { useScroll, useVModel, useVirtualList } from '@vueuse/core'
import { camelCase } from 'scule'
import type { TableColumn } from '../types'
import { calcCssUnit } from '../utils/common'

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
  arrivedLeft?: boolean
  arrivedRight?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  rowKey: 'key',
  dataSource: () => [],
  scroll: () => ({}),
  arrivedLeft: false,
  arrivedRight: false
})

const emit = defineEmits(['update:arrivedLeft', 'update:arrivedRight'])

const columns = ref<TableColumn[]>([])

const { header } = useSlots()

if (header) {
  let colSlots = header()
  const [{ children }] = colSlots
  if (Array.isArray(children)) { colSlots = children as any }
  columns.value = colSlots.map(({ props }: any) => {
    const defaultProps = { align: 'left', dataIndex: '' }
    const dynamicProps: any = {}

    Object.entries(props).forEach(([key, value]) => {
      dynamicProps[camelCase(key)] = value
    })

    return { ...defaultProps, ...dynamicProps }
  })
}

const { list, containerProps, wrapperProps } = useVirtualList(props.dataSource, {
  itemHeight: props.itemHeight,
  overscan: 10
})

const arrivedLeft = useVModel(props, 'arrivedLeft', emit)
const arrivedRight = useVModel(props, 'arrivedRight', emit)
const { arrivedState } = useScroll(containerProps.ref)

watch(arrivedState, ({ left, right }) => {
  arrivedLeft.value = left
  arrivedRight.value = right
}, { immediate: true })
</script>

<template>
  <div v-bind="containerProps" :style="{ width: calcCssUnit(scroll?.x), height: calcCssUnit(scroll?.y) }">
    <div v-bind="wrapperProps">
      <div
        :style="{
          display: 'grid',
          gridTemplateColumns: columns.map(({ width }) => width ? calcCssUnit(width) :'auto').join(' ')
        }"
      >
        <slot name="header" />

        <slot name="body" v-bind="{ rows: list, cols: columns }" />
      </div>
    </div>
  </div>
</template>
