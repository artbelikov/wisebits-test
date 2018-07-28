import { RESTART } from 'actions/action-types'

const initialState = {}

export default (state = initialState, { type, payload }) => {
  let newState = { ...state }
  switch (type) {
    default:
      return state
  }
}