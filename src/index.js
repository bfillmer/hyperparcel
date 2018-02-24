/** @jsx h */
import {h, app} from 'hyperapp'

const view = () => (
  <div>
    hello hyperapp
  </div>
)

app({}, {}, view, document.getElementById('root'))
