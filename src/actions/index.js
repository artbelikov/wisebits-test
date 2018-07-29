import {
  RESTART,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_RIGHT,
  CHEAT,
  HISTORY_STEP,
  MOVE_LEFT,
} from 'actions/action-types';

export const restart = () => {
  return {
    type: RESTART,
  };
};

export const cheat = () => {
  return {
    type: CHEAT,
  };
};

export const swapChip = (index, space) => {
  let type = null;
  if (index - space === -1) {
    type = MOVE_RIGHT;
  } else if (index - space === 1) {
    type = MOVE_LEFT;
  } else if (index - space === 4) {
    type = MOVE_UP;
  } else if (index - space === -4) {
    type = MOVE_DOWN;
  }
  return {
    type,
    payload: index,
  };
};

export const historyStep = step => {
  return {
    type: HISTORY_STEP,
    payload: step,
  };
};
