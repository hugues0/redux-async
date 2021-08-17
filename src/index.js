import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import configureStore from './redux/store/configureStore'

const store = configureStore()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

