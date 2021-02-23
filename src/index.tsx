import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';
import store from './core/store';
import { Root } from './pages/Root';
import { initAPI } from './core/api';
import './styles/index.scss';


initAPI({
  tokenID: '600d9cedf979dd001745ce20',
});

initReact(store);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


function initReact(store) {
  ReactDOM.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root'),
  );
}
