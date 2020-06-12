import { StoreManager } from '@philschatz/cevitxe'
import { VisibilityFilter, State } from '../types'
import { logger } from './logger'
import { proxyReducer } from './reducers'

const initialState = {
  visibilityFilter: VisibilityFilter.ALL,
  todoList: [],
  todoMap: {},
}

const middlewares = [logger]

const urls = process.env.REACT_APP_SIGNAL_SERVERS
  ? process.env.REACT_APP_SIGNAL_SERVERS.split(',')
  : ['wss://cevitxe-signal.herokuapp.com']

export const storeManager = new StoreManager<State>({
  databaseName: 'todo',
  proxyReducer,
  initialState,
  urls,
  middlewares,
})
