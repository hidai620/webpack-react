import React from 'react'
import { connect } from 'react-redux'

import { up, down } from '../actions'

import Counter from '../components/counter'

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    handleClickUp: () => { dispatch(up(1)) },
    handleClickDown: () => { dispatch(down(1)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
