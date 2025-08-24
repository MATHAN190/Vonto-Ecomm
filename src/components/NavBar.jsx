import React from 'react'
import { Link } from 'react-router-dom'
import Vonto from '../assets/vonto.png'

function NavBar() {
  return (
    <header className='bg-gray-100 shadow-xl rounded-b-lg sticky top-0 z-50 pb-3 md:pb-0'>
        <div className='max-w-6xl mx-auto px-3 py-3 flex items-center justify-between'>
            <Link to="/" className='text-xl font-bold flex items-center '>
                  <img src={Vonto} alt="Vonto" className='w-10 h-10 shadow-2xl' />
                  Vonto
            </Link>
            
            {/*middle search*/}

            <div className=' hidden md:flex items-center gap-2 border border-gray-500 px-3 py-1 justify-between rounded-lg w-150'>
                 <input type="text" placeholder='Search...' className='items-center w-130 p-1 focus:outline-none' />
                 <button aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 -1 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                 </button>
            </div>
              
              {/* end */}

              <div className='flex items-center space-x-3 md:space-x-8'>
                <button>
                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                     </svg>

                    
                </button>

                <button>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>

                </button>
              
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                   </svg>
                </button>

              </div>

        </div>
        <div className='flex justify-center'>
             <div className='  md:hidden items-center gap-2 border border-gray-500 px-3 py-1 justify-between rounded-lg w-100 flex'>
                 <input type="text" placeholder='Search...' className='items-center w-130 p-1 focus:outline-none' />
                 <button aria-label="Search">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="2 -1 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                 </button>
            </div>
        </div>
       
    </header>
    
  )
}

export default NavBar