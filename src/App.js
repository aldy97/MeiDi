import React from 'react';
import store from './store/index.js';
import Header from './common/header/index.js';
import Footer from './common/footer/index.js';
import Home from './pages/home/index';
import About from './pages/about/index';
import Projects from './pages/projects/index';
import Field from './pages/field/index';
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
              <Route path='/about' exact component={About}></Route>
              <Route path='/projects' exact component={Projects}></Route>
              <Route path='/field' exact component={Field}></Route>
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
