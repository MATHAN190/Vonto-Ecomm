import React from "react";

function Cat_Category() {
  const Category_product = [
    {
    id: 1,
    name: "Mobiles",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7mND9ve-OMkHiBxbzN_5CGsfgmKb8yb5r3A&s"
  },
  {
    id: 2,
    name: "Laptops",
    img: "data:image/jpeg;base64,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"
  },
  {
    id:3,
    name:"Mens",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/c/d/4xl-met-veb-formal-coralpink-s-jadouncreation-original-imah5chkcnzvmwpq.jpeg?q=70"
  },
  {
    id:4,
    name:"Womens",
    img:"https://rukminim2.flixcart.com/image/612/612/xif0q/top/0/v/n/xl-1-lf-w1900-leriya-fashion-original-imahcefepdt5hyjz.jpeg?q=70"
  },
  {
    id: 5,
    name: "Shoes",
    img: "https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/j/b/-original-imahdj78vnzmfbvv.jpeg?q=70" },
  {
    id: 6,
    name: "Headphones",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/headphone/y/v/w/-original-imah5heyc5vmhph6.jpeg?q=90"
  },
  {
    id: 7,
    name: "Smart Watch",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/smartwatch/s/i/u/-original-imah76jt64ffmwg4.jpeg?q=90"
  },
  {
    id: 8,
    name: "Cameras",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/dslr-camera/g/5/p/eos-18-eos-3000d-canon-original-imahbfq7fjbpzgvm.jpeg?q=90"
  },
  {
    id: 9,
    name: "Books",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/book/7/l/v/it-ends-with-us-original-imahdxwere85ddez.jpeg?q=90"
  },
  {
    id: 10,
    name: "TV",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/television/s/d/v/-original-imahefykcc5yjuqb.jpeg?q=90"
  },
  {
    id: 11,
    name: "Furniture",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/wardrobe-closet/w/a/r/-original-imahc4ygtfkwc2me.jpeg?q=90" },
  {
    id: 12,
    name: "Toys",
    img: "https://rukminim2.flixcart.com/image/100/100/xif0q/remote-control-toy/c/d/5/monster-truck-toy-for-kids-amazing-toys-360-degree-stunt-truck-0-original-imahdj6pdtseckdr.jpeg?q=90" }
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">📂 Categories</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Category_product.map((cat) => (
          <div
            key={cat.id}
            className="bg-white p-4 shadow rounded-lg flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={cat.img}
              alt={cat.name}
              className="w-32 h-32 object-cover rounded-md"
            />
            <h2 className="mt-2 font-semibold">{cat.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cat_Category;
