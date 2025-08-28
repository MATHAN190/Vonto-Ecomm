import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Order() {
  const location = useLocation();
  const navigate = useNavigate();

  // productDetails page la irunthu vandha data
  const product = location.state?.product;

  if (!product) {
    return <p className="p-6 text-red-500">❌ No product selected for order</p>;
  }

  const handleOrder = (e) => {
    e.preventDefault();
    // Success page ku product details pass panrom
    navigate("/success", { state: { product } });
  };

  return (
    <div className="p-6 max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-4">📝 Order Summary</h1>

      <div className="bg-white shadow p-4 rounded mb-6">
        <img src={product.img} alt={product.name} className="w-32 h-32 rounded mb-2" />
        <h2 className="font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold">{product.price}</p>
      </div>

      <form onSubmit={handleOrder} className="space-y-4">
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Address"
          required
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Phone Number"
          required
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-orange-600 text-white font-bold px-6 py-2 rounded-lg w-full"
        >
          ✅ Place Order
        </button>
      </form>
    </div>
  );
}

export default Order;
