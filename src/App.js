import React, { useState } from 'react'
import Footer from "./components/Footer";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Section from "./components/Section";

function App() {
  // State for the cart count and the items in the cart
  const [count, setCount] = useState(0)
  const [cartItems, setCartItems] = useState([])

  return (
    <div className="App">
      {/* <!-- Navigation--> */}
      <NavBar count={ count } />

      {/* <!-- Header--> */}
      <Header />

      {/* <!-- Section--> */}
      <Section count={ count } setCount={ setCount } cartItems={ cartItems } setCartItems={ setCartItems } />

      {/* <!-- Footer--> */}
      <Footer />
    </div>
  );
}

export default App;
