import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Categories from './components/Categories/Categories';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { Provider } from 'react-redux';
import createReduxStore from './store/index';


function App() {
  return (
    <Provider store={createReduxStore}>
      <div className="App">
        <Header />
        <Categories />
        <Products />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
