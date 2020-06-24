import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'
import rootReducer from './reducers'
import portalRootReducer from './reducers/portalReducers'
import { Provider } from 'react-redux'
import PortalPage from './components/portal/portalPage'

const pageDisplay = 0

const store = createStore(
  pageDisplay === 0 ? rootReducer : portalRootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {pageDisplay === 0 ? <App /> : <PortalPage />}
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
