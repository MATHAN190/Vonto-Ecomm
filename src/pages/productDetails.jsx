import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import allProducts from "../data/Product_data";
import Single_Details from "../components/Single_Details";
import ReviewSection from "../components/Reviews";
import { CartContext } from "../components/CartContext";

function ProductDetails() {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const { id } = useParams();

  // Flatten all products into one array
  const mergedProducts = Object.values(allProducts).flat();
  const product = mergedProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="p-6 text-red-500">Product not found</h2>;
  }

  const handleCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  return (
    <div>
      {/* Top Section */}
      <div className="p-6 md:flex gap-6">
        {/* Left: Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.img || "https://via.placeholder.com/300"}
            alt={product.name}
            className="w-70 h-80 rounded-md"
          />
        </div>

        {/* Right: Details */}
        <div className="flex-1">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-green-600 font-bold mt-2">Best offer {product.price}</p>

          {/* Reviews + Stock + Desc */}
          <div className="mt-4">
            <p>⭐⭐⭐⭐☆ (120 reviews)</p>
            <p className="text-gray-600 mt-2">In stock</p>
            <p className="mt-2 text-sm text-gray-500">Best For You</p>
            <p className="mt-4">
              This product is made by Vonto Products with premium quality.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button
              onClick={handleCart}
              className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition"
            >
              🛒 Add to Cart
            </button>
            <button
              onClick={() => navigate("/order", { state: { product } })}
              className="bg-orange-600 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-orange-700 transition"
            >
              ⚡ Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra Sections */}
      <Single_Details />
      <ReviewSection />
    </div>
  );
}

export default ProductDetails;
