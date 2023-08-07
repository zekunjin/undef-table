import type { App } from 'vue'
import UndefCol from './components/Col.vue'
import UndefRow from './components/Row.vue'
import UndefTable from './components/Table.vue'

UndefTable.install = (vue: App) => {
  vue.component('UndefCol', UndefCol)
  vue.component('UndefRow', UndefRow)
  vue.component('UndefTable', UndefTable)
}

export { UndefCol, UndefRow, UndefTable }
