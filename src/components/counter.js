/**
 * Created by N1407A003 on 2016/10/21.
 */
import React, { Component } from 'react';

export default class Counter extends Component {
  render() {
    console.log(this.props);
    return (
      <div> count: {this.props.count}</div>
    );
  }

  componentDidMount() {
  }
}
