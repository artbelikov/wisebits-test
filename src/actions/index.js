import {
  RESTART,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_RIGHT,
  MOVE_LEFT
} from 'actions/action-types'

export const restart = () => {
  return {
    type: RESTART
  }
}

export const swapChip = (index, space) => {
  let type = null
  if (index - space === -1){
    type = MOVE_RIGHT
  } else if(index - space === 1){
    type = MOVE_LEFT
  } else if(index - space === 4){
    type = MOVE_UP
  } else if(index - space === -4){
    type = MOVE_DOWN
  }
  return {
    type,
    payload: index
  }
}
