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
      console.log("countReducer > UP", action);
      //ADD_TEXTアクションが来た時は現状の state にAction Creatorから returnされたデータを元に新規オブジェクトを作成、state にプラスして新しい state を返す
      let ret = {
        count: state.count + action.stepBy
      };
      console.log("countReducer > UP return:", ret);
      return ret;
    //case DOWN:
    //  // CLEAT_TEXTアクションが来た場合には空の配列を返して state を初期化する
    //  return []
    default:
      return state
  }
}


