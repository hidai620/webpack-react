/**
 * Created by N1407A003 on 2016/10/21.
 */
import React from 'react';

import { connect } from 'react-redux'

/* Action Creatorのインポート */
import { up, down } from '../actions'


class Counter extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.state = {count: parseInt(this.props.count)};

    // がっかり感半端ない
     this.up   = this.up.bind(this);
     this.down = this.down.bind(this);
  }

  render() {
    return (
      <div>
        <div>count: {this.props.count}</div>
        <button onClick={this.props.handleClickUp}>+</button>
        <button onClick={this.down}>-</button>
      </div>
    );
  }

  up(e) {
    console.log("up", this.props);
    this.props.dispatch(up(1))
  }

  down(e) {
    this.props.dispatch(down(1))
  }
}

// セレクターの定義: Appコンポーネントが必要とするデータを グローバルなstate 全体の中から取捨選択して取得する。今回は state 全体をそのままreturnしている
const selector = (state) => {
  // [storedText]というキー名はreducer.jsの最下部で設定している Store のキー名
  console.log(state.storedCount);
  return {
    state: state // Key名とvalue名が同じなので return {state} でも可: Object Literal Shorthand
  }
};

export default connect(selector)(Counter)

