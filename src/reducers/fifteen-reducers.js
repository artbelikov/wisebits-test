import { RESTART, MOVE_UP, MOVE_DOWN,
  MOVE_RIGHT,
  CHEAT,
  MOVE_LEFT } from 'actions/action-types'

const initialState = {}

function swapChips (state, index) {
  let newOrder = [...state.order]
  newOrder[state.space] = newOrder[index]
  newOrder[index] = 0
  return {order: newOrder, space: index}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTART:
      let newOrder = [...Array(16).keys()].sort(() => Math.random()-.5)
      return {order: newOrder, space: newOrder.indexOf(0)}
    case MOVE_UP:
      if (payload - 4 >= 0 && payload - state.space === 4) {
        return swapChips(state, payload)
      } else {
        return state
      }
    case MOVE_DOWN:
      if (payload + 4 <= 15 && payload - state.space === -4) {
        return swapChips(state, payload)
      } else {
        return state
      }
    case MOVE_RIGHT:
      if (payload + 1 <= 15 && payload - state.space === -1) {
        return swapChips(state, payload)
      } else {
        return state
      }
    case MOVE_LEFT:
      if (payload - 1 >= 0 && payload - state.space === 1) {
        return swapChips(state, payload)
      } else {
        return state
      }
    case CHEAT:
      let order = [...Array(16).keys()]
      order.shift()
      order = order.concat(0)
      return {order, space: 15}
    default:
      return state
  }
}