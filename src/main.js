// src/main.jsx
import React           from 'react';
import { render }      from 'react-dom';

// redux
import { createStore } from 'redux'
import { Provider }    from 'react-redux'

// import Counter from './components/counter.js';
import App from './container/app'
import { counterReducer } from './reducer.js';



//createStore() メソッドでアプリケーションのStateを保存する Store を生成する。
let applicationStore = createStore(counterReducer);
//console.log("applicationStore", applicationStore);

render(
    <Provider store={applicationStore}>
      <App />
    </Provider>,
    document.getElementById('app')
);

