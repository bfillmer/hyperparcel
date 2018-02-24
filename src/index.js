/** @jsx h */
import {h, app} from 'hyperapp'
import logger from '@hyperapp/logger'

import {state, actions} from './state/store'
import {App} from './view/App'
import {compose} from './utils/functional'

const {NODE_ENV} = process.env

const view = (state, actions) => <App state={state} actions={actions} />

const init = (NODE_ENV === 'development') ? compose(logger())(app) : app

init(state, actions, view, document.getElementById('root'))
