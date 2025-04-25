import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="font-poppins">
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Features />
                  <ProductCard />
                </>
              }
            />
            <Route path="/products" element={<ProductsPage />} />
          </Routes>
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
