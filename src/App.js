import React from 'react';
import store from './store/index.js';
import Header from './common/header/index.js';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <div>
          <Header />
          <GlobalStyle />
        </div>
      </Provider>
    </div>
  );
}

export default App;
