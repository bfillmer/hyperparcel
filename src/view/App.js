/** @jsx h */
import {h} from 'hyperapp'

export const App = ({state, actions}) => (
  <div>
    <h1>{state.count}</h1>
    <p>
      <button onclick={() => actions.down(1)}>-</button>
      <button onclick={() => actions.up(1)}>+</button>
    </p>
  </div>
)
