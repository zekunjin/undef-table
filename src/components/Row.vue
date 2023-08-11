<script setup lang="ts">
import { computed, useAttrs } from 'vue'
import type { TableColumn } from '../types'
import { UndefCell } from '..'

defineProps<{
  row: Record<string, any>
  cols: TableColumn[]
  height: number
}>()

const attrs = useAttrs()

const rowStyle = computed(() => (attrs?.style || {}))
</script>

<template>
  <slot v-bind="{ cols }">
    <UndefCell
      v-for="({ dataIndex, fixed }) in cols"
      :key="row[dataIndex]"
      :fixed="fixed"
      :height="height"
      :style="rowStyle"
    >
      {{ row[dataIndex] }}
    </UndefCell>
  </slot>
</template>
