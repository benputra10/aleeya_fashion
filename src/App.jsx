import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import { CartProvider } from "./context/CartContext";

// Di dalam komponen utama:
function App() {
  return (
    <CartProvider>
      <div className="font-poppins">
        <Navbar />
        <Hero />
        <Features />
        <ProductCollection />
        <Cart />
      </div>
    </CartProvider>
  );
}

export default App;
