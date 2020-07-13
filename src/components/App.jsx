import React from "react";
import Cart from "./Cart";
//1. Extract the repeated parts of the App into a Entry component.
//2. Use props to make the Entry component render different data.
//3a. Import the items constant.
//3b. Map through the items array and render Entry components.

//Items has 4 entries, so createEntry gets called 3 times.
//Each time, it passes 1 item from the Item array as a var called productTerm.

function App() {
  return (
    <div>
      <h1>
        <span>NamaSlay</span>
      </h1>
      <Cart />
      
    </div>
  );
}

export default App;