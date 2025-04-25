import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const ProductsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  // State management
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quantities, setQuantities] = useState({});
  const [isAdding, setIsAdding] = useState({});

  // Initialize quantities and get state from navigation
  useEffect(() => {
    const initialQuantities = {};
    products.forEach((product) => {
      initialQuantities[product.id] = 1;
    });
    setQuantities(initialQuantities);

    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
    if (location.state?.search) {
      setSearchQuery(location.state.search);
    }
  }, [location.state]);

  // Filter products based on category and search query
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "all" || product.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === "" ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Handle quantity change
  const handleQuantityChange = (productId, value) => {
    const newValue = Math.max(1, value);
    setQuantities((prev) => ({
      ...prev,
      [productId]: newValue,
    }));
  };

  // Handle add to cart
  const handleAddToCart = async (productId) => {
    setIsAdding((prev) => ({ ...prev, [productId]: true }));

    const product = products.find((p) => p.id === productId);
    const quantity = quantities[productId] || 1;

    try {
      await addToCart(product, quantity);
    } catch (error) {
      console.error("Failed to add to cart:", error);
    } finally {
      setTimeout(() => {
        setIsAdding((prev) => ({ ...prev, [productId]: false }));
      }, 1000);
    }
  };

  // Available categories
  const categories = [
    { id: "all", name: "All Products" },
    { id: "new", name: "New Arrivals" },
    { id: "boy", name: "For Boys" },
    { id: "girl", name: "For Girls" },
    { id: "sale", name: "Flash Sale" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header with back button */}
      <div className="mb-6 flex justify-between items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-pink-600 hover:text-pink-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Back
        </button>
        <h1 className="text-2xl font-bold text-gray-800">All Products</h1>
        <div className="w-5"></div> {/* Spacer for alignment */}
      </div>

      {/* Search and Filter Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 w-full md:w-auto justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category.id
                    ? "bg-pink-600 text-white shadow-md"
                    : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="text-sm text-gray-500 mb-2">
          Showing {filteredProducts.length} products
        </div>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 relative"
            >
              {/* Product Badges */}
              <div className="absolute top-2 left-2 flex gap-2 z-10">
                {product.isNew && (
                  <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    New
                  </span>
                )}
                {product.isSale && (
                  <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    Sale
                  </span>
                )}
                {product.isBestseller && (
                  <span className="bg-yellow-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    Bestseller
                  </span>
                )}
                {product.discount && (
                  <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full shadow">
                    {product.discount}% OFF
                  </span>
                )}
              </div>

              {/* Product Image */}
              <div className="relative h-60 overflow-hidden group">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>

              {/* Product Info */}
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-1 truncate">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2 h-10">
                  {product.description}
                </p>

                {/* Price */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-pink-600 font-bold">
                    Rp{product.price.toLocaleString()}
                  </span>
                  {product.originalPrice && (
                    <span className="text-gray-400 text-sm line-through">
                      Rp{product.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center border rounded-md">
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] - 1
                        )
                      }
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      -
                    </button>
                    <span className="px-3 py-1 border-x">
                      {quantities[product.id] || 1}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(
                          product.id,
                          quantities[product.id] + 1
                        )
                      }
                      className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button
                  onClick={() => handleAddToCart(product.id)}
                  disabled={isAdding[product.id]}
                  className={`w-full py-2 rounded-md flex items-center justify-center gap-2 transition-colors ${
                    isAdding[product.id]
                      ? "bg-green-500 text-white"
                      : "bg-pink-100 text-pink-600 hover:bg-pink-200"
                  }`}
                >
                  {isAdding[product.id] ? (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 animate-bounce"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Added!
                    </>
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                        />
                      </svg>
                      Add to Cart
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
          <button
            onClick={() => {
              setActiveCategory("all");
              setSearchQuery("");
            }}
            className="mt-4 px-4 py-2 bg-pink-500 text-white rounded-md hover:bg-pink-600 transition"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
