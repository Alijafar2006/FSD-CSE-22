import { useState } from "react";
import Footer from "./footer";
import Navbar from "./navbar";
import Header from "./header";
import Body from "./body";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddToCart = (book) => {
    console.log(`Added ${book.title} to cart`);
    setCartCount((count) => count + 1);
  };

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Header />
      <Body onAddToCart={handleAddToCart} />
      <Footer />
    </div>
  );
}

export default App;
