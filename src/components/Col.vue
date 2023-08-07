<script setup lang="ts">
interface Props {
  align?: 'left' | 'right' | 'center'
  title: string
  dataIndex: string
  ellipsis?: boolean
  children: Props[]
  width?: number | string | undefined
}

withDefaults(defineProps<Props>(), {
  align: 'left',
  width: 'auto'
})
</script>

<template>
  <div :style="{ position: 'sticky', top: 0 }">
    {{ title }}
  </div>
</template>
