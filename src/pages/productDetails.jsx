import React from "react";
import { useParams } from "react-router-dom";
import allProducts from "../data/Product_data";
import Product_list from "./Product_list";
import Single_Details from "../components/Single_Details";
import ReviewSection from "../components/Reviews";
import Buy_AddCart from "../components/Buy_AddCart";

function ProductDetails() {
  const { id } = useParams();
  
  // All products flatten pannum
  const mergedProducts = Object.values(allProducts).flat();
  const product = mergedProducts.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2 className="p-6 text-red-500">Product not found</h2>;
  }

  return (
    <div>
           <div className="p-6 md:flex gap-6">
      {/* Left side: Image */}
      <div className="flex-1 flex justify-center">
        <img 
          src={product.img || "https://via.placeholder.com/300"} 
          alt={product.name} 
          className="w-70 h-80  rounded-md" 
        />
      </div>

      {/* Right side: Details */}
      <div className="flex-1">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-green-600 font-bold mt-2">Best offer{product.price}</p>

        {/* Reviews + Stock + Size + Desc */}
        <div className="mt-4">
          <p>⭐⭐⭐⭐☆ (120 reviews)</p>
          <p className="text-gray-600 mt-2">In stock</p>
          <p className="mt-2 text-sm text-gray-500">
            Available sizes: S, M, L, XL
          </p>
          <p className="mt-4">
            This Product made for Vonto Products and One of the best Quality
          </p>
        </div>
      </div>
      
    </div>{/*main*/}
    <Buy_AddCart/>
    <Single_Details/>
    <ReviewSection/>
</div> //last
    
  );
}

export default ProductDetails;
