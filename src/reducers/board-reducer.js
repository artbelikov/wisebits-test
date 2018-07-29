import {
  RESTART,
  MOVE_UP,
  MOVE_DOWN,
  MOVE_RIGHT,
  HISTORY_STEP,
  CHEAT,
  MOVE_LEFT,
} from 'actions/action-types';

const initialState = { historyLength: 0 };
const history = {
  step: 0,
  stack: [],
};

function swapChips(state, index) {
  let newOrder = [...state.order];
  newOrder[state.space] = newOrder[index];
  newOrder[index] = 0;
  return { order: newOrder, space: index };
}

function updateHistory(state) {
  let stack = history.stack.slice(0, history.step);
  stack.push(state);
  history.step += 1;
  history.stack = stack;
  state.historyLength = history.stack.length;
  return state;
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case RESTART:
      let newOrder = [...Array(16).keys()].sort(() => Math.random() - 0.5);
      return updateHistory({ order: newOrder, space: newOrder.indexOf(0) });
    case MOVE_UP:
      if (payload - 4 >= 0 && payload - state.space === 4) {
        return updateHistory(swapChips(state, payload));
      } else {
        return state;
      }
    case MOVE_DOWN:
      if (payload + 4 <= 15 && payload - state.space === -4) {
        return updateHistory(swapChips(state, payload));
      } else {
        return state;
      }
    case MOVE_RIGHT:
      if (payload + 1 <= 15 && payload - state.space === -1) {
        return updateHistory(swapChips(state, payload));
      } else {
        return state;
      }
    case MOVE_LEFT:
      if (payload - 1 >= 0 && payload - state.space === 1) {
        return updateHistory(swapChips(state, payload));
      } else {
        return state;
      }
    case CHEAT:
      let order = [...Array(16).keys()];
      order.shift();
      order = order.concat(0);
      return updateHistory({ order, space: 15 });
    case HISTORY_STEP:
      history.step = Math.min(Math.max(payload - 1, 0), history.stack.length);
      return {
        ...history.stack[history.step],
        historyLength: history.stack.length,
      };
    default:
      return state;
  }
};
