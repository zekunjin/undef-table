export interface TableColumn {
  align?: 'left' | 'right' | 'center'
  dataIndex: string
  ellipsis?: boolean
  children?: TableColumn[]
  width?: number | string | undefined
  fixed?: 'left' | 'right' | undefined
}