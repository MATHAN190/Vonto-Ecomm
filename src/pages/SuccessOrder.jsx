import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

function SuccessOrder() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state?.product;

  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold text-green-600">🎉 Order Placed Successfully!</h1>

      {product && (
        <div className="mt-6 bg-white shadow p-4 rounded inline-block">
          <img src={product.img} alt={product.name} className="w-40 h-40 mx-auto rounded" />
          <h2 className="font-semibold mt-2">{product.name}</h2>
          <p className="text-green-600 font-bold">{product.price}</p>
        </div>
      )}

      <button
        onClick={() => navigate("/")}
        className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg"
      >
        🏠 Back to Home
      </button>
    </div>
  );
}

export default SuccessOrder;
