import React from 'react';
import store from './store/index.js';
import Header from './common/header/index.js';
import Footer from './common/footer/index.js';
import Home from './pages/home/index';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { GlobalStyle } from './style';

function App() {
  return (
    <div className='App'>
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <div>
              <Route path='/' exact component={Home}></Route>
            </div>
          </BrowserRouter>
          <GlobalStyle />
          <Footer />
        </div>
      </Provider>
    </div>
  );
}

export default App;
