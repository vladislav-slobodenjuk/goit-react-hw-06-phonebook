import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App/App.jsx';

import { Provider } from 'react-redux';
import store from 'redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store.store}>
      <PersistGate loading={null} persistor={store.persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
