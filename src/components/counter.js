/**
 * Created by N1407A003 on 2016/10/21.
 */
import React from 'react';

import { connect } from 'react-redux'

/* Action Creatorのインポート */
import { up, down } from '../actions'


class Counter extends React.Component {

  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.handleClickUp}>+</button>
        <button onClick={this.props.handleClickDown}>-</button>
      </div>
    );
  }
}

// セレクターの定義: Counterコンポーネントが必要とするデータを グローバルなstate
// 全体の中から取捨選択して取得する。今回は state 全体をそのままreturnしている
const selector = (state) => {
  return {
    state: state // Key名とvalue名が同じなので return {state} でも可: Object Literal Shorthand
  }
};


export default connect(selector)(Counter)

