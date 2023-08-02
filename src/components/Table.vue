<script setup lang="ts">
interface TableColumn {
  title: string
  dataIndex: string
}

interface TableScroll {
  x: string | number
  y: string | number
}

interface TablePagination {
  current: number
  pageSize: number
  total: number
}

interface Props {
  columns: TableColumn[],
  scroll: TableScroll | undefined
  pagination: false | TablePagination | undefined
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => []
})
</script>

<template>
  <div :style="{ display: 'grid', gridTemplateColumns: `repeat(${columns.length}, minmax(0, 1fr))` }">
    <div v-for="col in props.columns" :key="col.dataIndex">
      {{ col.title }}
    </div>
  </div>
</template>
