import { PageParam, StateTypes } from './shared'

export interface ListArticlesQuery extends PageParam {
  tag: string
  username: string
  state: StateTypes,
  top: number
  collection_id: number
}
