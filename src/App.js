import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <h1> Shopping Cart </h1>
      <Cart/>
    </div>
  );
}

export default App;