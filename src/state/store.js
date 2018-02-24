
export const state = {
  count: 0
}

export const actions = {
  down: value => state => ({count: state.count - value}),
  up: value => state => ({count: state.count + value})
}
