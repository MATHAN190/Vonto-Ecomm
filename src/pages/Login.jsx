import React, { useState } from 'react'

function Login() {
  const [Islogin,setIslogin] = useState(true)
  return (
    <div className='  '>
          <div className='bg-white justify-center w-full py-3   '>
         { Islogin ? <h1 className='text-2xl font-bold'>Welcom your login</h1> : <h1 className='text-2xl font-bold' >Please login</h1>}

         <button  className="bg-orange-600 text-white font-bold px-6 py-3 rounded-lg shadow mt-10 hover:bg-orange-700 transition">
           {!Islogin ? "login" : "logout"}
         </button>
    </div>
    </div>

  )
}

export default Login