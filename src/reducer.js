import { combineReducers } from 'redux'
import { UP, DOWN } from './actions';

let initialState = {
    count: 0,
    stepBy: 1
  };

// State がundefinedの場合はデフォルト引数でinitialStateを使用するようにする
export let counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case UP:
      console.log("countReducer > UP", state);
      let ret = {
        count: state.count + action.stepBy
      };
      //console.log("countReducer > UP return:", ret);
      return ret;
    case DOWN:
      console.log("countReducer > DOWN", state);
      return {
        count: state.count - action.stepBy
      };
    default:
      return state
  }
}


