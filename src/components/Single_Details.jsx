
function Single_Details() {
    const Offer = [
        {
            id:1,
            text: " 5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarter",
        },
         {
            id:2,
            text: " Get additional ₹1000 off on Credit/Debit Card, UPI and EMI Transactions",
        },
         {
            id:3,
            text: " 5% cashback on Axis Bank Flipkart Debit Card up to ₹750",
        },
         {
            id:4,
            text: " No cost EMI ₹3,417/month. Standard EMI also available",
        }
    ]
  return (
    <div className=' rounded-lg p-3 flex  justify-center'>
        <div  className='bg-gray-200 p-5 w-250 rounded-lg'>
            <h2 className='text-xl font-bold '>Available offers</h2>
            {
                Offer.map((of,index)=>(
            <div className='flex  items-center gap-2 '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="green" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" />
                 </svg>

               <p className='text-sm md:text-lg'><span className= 'font-bold '>Bank Offer</span>{of.text}</p>
            </div>
                ))
            }
            

            
            
        </div>
    </div>
  )
}

export default Single_Details