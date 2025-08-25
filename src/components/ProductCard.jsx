import React from 'react'
import { Link } from 'react-router-dom';

function ProductCard() {
  const menu_product = [
    {
      id: 1,
      p_name: "Polo T-Shirt",
      price: "60% off",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/3/9/0/m-64518810-try-this-original-imahbhaqvp3vfzac.jpeg?q=70"
    },
    {
      id: 2,
      p_name: "Korean T-Shirt",
      price: "60% off",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/s/x/o/m-fmt254-los23-bk-force-original-imah3znwnxy9aa4z.jpeg?q=70"
    },
    {
      id: 3,
      p_name: "Puma T-Shirt",
      price: "60% off",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/b/l/e/m-69030324-puma-original-imahakptuhnbtzks.jpeg?q=70"
    },
    {
      id: 4,
      p_name: "Striped T-Shirt",
      price: "60% off",
      img: "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/w/c/t/s-fmt336-stripe-pink-force-original-imah6tzkgcazg6gf.jpeg?q=70"
    }
  ];

  const otherProducts = [
    {
      id:1,
      p_name:"Fastrack Watch",
      price:"From ₹1999",
      img:"https://rukminim1.flixcart.com/image/240/240/xif0q/smartwatch/5/v/s/-original-imagxrhetgfuebnn.jpeg?q=60"
    },
    {
      id:2,
      p_name:"One Plus",
      price:"From ₹999 ",
      img:"https://rukminim1.flixcart.com/image/240/240/l58iaa80/headphone/k/z/m/nord-buds-ce-oneplus-original-imagfyk4hyvgg6ze.jpeg?q=60"
    },
    {
      id:3,
      p_name:"IPhone 14",
      price:"From ₹4999 ",
      img:"https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/m/o/b/-original-imaghx9qkugtbfrn.jpeg?q=70"
    },
    {
      id:4,
      p_name:"Washing Machine",
      price:"From ₹7999",
      img:"https://rukminim1.flixcart.com/image/240/240/xif0q/washing-machine-new/r/k/6/-original-imahfeswzjhsfzbn.jpeg?q=60"
    },
  ]

  return (
    <div>
         <div className="p-6 bg-gray-100 mt-5">
      <h1 className="text-2xl font-bold mb-6">🔥 T-Shirt</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {menu_product.map((data,index) => (
           <Link to="/category">
            <div 
            key={data.id} 
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-center items-center"
          >
           
            <img 
              src={data.img} 
              alt={data.p_name} 
              className="w-40 h-50 object-cover rounded-md" 
            />
            <h2 className="font-semibold mt-2">{data.p_name}</h2>
            <h3 className="text-green-600 font-bold">{data.price}</h3>
          </div>
           </Link>
         
        ))}
      </div>
    </div>
         
         {/* Other*/}
            
         <div className="p-6 bg-gray-100 mt-5">
      <h1 className="text-2xl font-bold mb-6">🔥 Offers</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {otherProducts.map((data) => (
          <Link to="/category">
           <div 
            key={data.id} 
            className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition flex flex-col justify-center items-center"
          >
            <img 
              src={data.img} 
              alt={data.p_name} 
              className="w-fit  h-50  rounded-md" 
            />
            <h2 className="font-semibold mt-2">{data.p_name}</h2>
            <h3 className="text-green-600 font-bold">{data.price}</h3>
          </div>
          </Link>
         
        ))}
      </div>
    </div>

           <div className='"p-10 flex flex-col md:flex-row md:justify-evenly  '>
                <img className='w-120 h-150 rounded-lg mt-5' src="https://rukminim1.flixcart.com/www/1060/1560/promos/26/09/2023/6c3c5fe2-c236-4fa2-8d97-595e1e01da01.jpg?q=60" alt="" />
                <img className='w-120 h-150 rounded-lg mt-5'src="https://rukminim1.flixcart.com/fk-p-flap/1060/1620/image/ce3cf81edb760559.jpg?q=60" alt="" />
           </div>
    </div>
    



  );
}

export default ProductCard;
