import type { App } from 'vue'
import UndefTable from './components/Table.vue'

UndefTable.install = (vue: App) => {
  vue.component('UndefTable', UndefTable)
}

export { UndefTable }
