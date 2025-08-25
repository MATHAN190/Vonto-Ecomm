import React from "react";
import allProducts from "../data/Product_data";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Product_list() {
  const { name } = useParams(); // match this with your route param
  const product = allProducts[name.toLowerCase()] || [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">
        {name.toUpperCase()} Products
      </h1>

      {product.length === 0 ? (
        <p>No products available.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {product.map((item) => (

            <div
              key={item.id}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <Link to={`/product/${item.id}`}>
              <img
                src={item.img || "https://via.placeholder.com/150"}
                alt={item.name}
                className="w-fit h-35  rounded-md"
              />
              
              <h2 className="font-semibold mt-2">{item.name}</h2>
              <p className="text-green-600 font-bold">{item.price}</p>
              
              </Link>
            </div>

            
          ))}
        </div>
      )}
    </div>
  );
}

export default Product_list;
