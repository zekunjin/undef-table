import type { App } from 'vue'
import UndefCol from './components/Col.vue'
import UndefRow from './components/Row.vue'
import UndefCell from './components/Cell.vue'
import UndefTable from './components/Table.vue'

UndefTable.install = (vue: App) => {
  vue.component('UndefCol', UndefCol)
  vue.component('UndefRow', UndefRow)
  vue.component('UndefCell', UndefCell)
  vue.component('UndefTable', UndefTable)
}

export { UndefCol, UndefRow, UndefTable, UndefCell }
