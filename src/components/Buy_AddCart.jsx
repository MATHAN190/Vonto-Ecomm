import React from 'react'

function Buy_AddCart() {
  return (
    <div>
        <div className="flex gap-4 justify-center">
        <button className="bg-yellow-500 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-yellow-600 transition">
          🛒 Add to Cart
        </button>
        <button className="bg-orange-600 text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-orange-700 transition">
          ⚡ Buy Now
        </button>
      </div>
    </div>
  )
}

export default Buy_AddCart