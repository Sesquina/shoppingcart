import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Cart from './components/Cart';
import Header from "./components/Header";

function App() {
  return (
    <div className="App">      
      <Header />
      <Cart />
    </div>
  );
}

export default App;