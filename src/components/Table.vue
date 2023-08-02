<script setup lang="ts">
export interface Props {
  columns: string[]
}

const props = withDefaults(defineProps<Props>(), {
  columns: () => []
})
</script>

<template>
  <div>
    {{ props }}
  </div>
</template>
