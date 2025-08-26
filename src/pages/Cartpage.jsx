import React, { useContext, useState } from "react";
import { CartContext } from "../components/CartContext";
import { useNavigate } from "react-router-dom";

function Cartpage() {
    const navigate = useNavigate();
  const { cartItems } = useContext(CartContext);
 const total = cartItems.reduce((acc, item) => {
  // price string la iruntha "₹" or "Rs" remove panrom
  const numericPrice = parseFloat(item.price.toString().replace(/[^0-9.]/g, ""));
  return acc + (numericPrice || 0);
}, 0);
   
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">🛒 Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-gray-500">No item in cart</p>
      ) : (
        cartItems.map((item, i) => (
          <div key={i} className="p-4 bg-white rounded shadow mt-4 flex items-center gap-4">
            <img
              src={item.img || "https://via.placeholder.com/100"}
              alt={item.name}
              className="w-20 h-20 rounded"
            />
            <div>
              <h2 className="font-semibold">{item.name}</h2>
              <p className="text-green-600 font-bold">{item.price}</p>
            </div>

              
               
          </div>
        ))
      )}
        <div className="bg-green-200 p-4 rounded-xl flex justify-center">
             <div className="flex">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="m8.99 14.993 6-6m6 3.001c0 1.268-.63 2.39-1.593 3.069a3.746 3.746 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043 3.745 3.745 0 0 1-3.068 1.593c-1.268 0-2.39-.63-3.068-1.593a3.745 3.745 0 0 1-3.296-1.043 3.746 3.746 0 0 1-1.043-3.297 3.746 3.746 0 0 1-1.593-3.068c0-1.268.63-2.39 1.593-3.068a3.746 3.746 0 0 1 1.043-3.297 3.745 3.745 0 0 1 3.296-1.042 3.745 3.745 0 0 1 3.068-1.594c1.268 0 2.39.63 3.068 1.593a3.745 3.745 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.297 3.746 3.746 0 0 1 1.593 3.068ZM9.74 9.743h.008v.007H9.74v-.007Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm4.125 4.5h.008v.008h-.008v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                </svg>
                  <p className="text-green-900">You'll save ₹ 320.02 on this order!</p>
             </div>
        </div> 
          
       <div className="bg-gray-400  p-2 rounded-lg flex justify-between">
            <div id="total " className="bg-white flex items-center font-bold w-50 px-6 py3 rounded-lg" >
                    <h2>Total .</h2>
                   <p className="text-green-700">₹ {total}</p>
            </div>

            <div>
                <button
              onClick={() => navigate("/order")}
              className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow hover:bg-orange-700 transition"
            >
              ⚡ Order
            </button>
            </div>
           </div>

    </div>
  );
}

export default Cartpage;
