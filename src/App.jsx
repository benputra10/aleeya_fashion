import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Cart from "./components/Cart";
import ProductCard from "./components/ProductCard";
import ProductsPage from "./pages/ProductsPage";
import { CartProvider } from "./context/CartContext";
import TestimonialCarousel from "./components/TestimonialCarousel";
import Footer from "./components/Footer";

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
                  <TestimonialCarousel />
                  <Footer />
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
