import Table from './components/Table.vue'
import Theader from './components/Theader.vue'
import Tbody from './components/Tbody.vue'

export default {
  install(vue) {
    vue.component('UndefTable', Table)
    vue.component('UndefTheader', Theader)
    vue.component('UndefTbody', Tbody)
  }
}
