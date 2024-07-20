import React from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Home() {
  const location = useLocation();

  const {email,name,address,contact,gender } = location.state || {};

  return (
    <div className=' w-2/5 bg-gray-100 shadow-xl rounded-md text-black text-center'>
      <h1 className='text-xl font-semibold mt-5  '>Name:{name} </h1>
      <h1 className='text-xl mt-5 '>Email: {email} </h1>
      <h1 className='text-xl mt-5  '>Address: {address} </h1>
      <h1 className='text-xl mt-5  '>Gender: {gender} </h1>
      <h1 className='text-xl mt-5  '>contact number: {contact} </h1>
      <br/>
     <Link to='/' className='bg-red-500 rounded-md text-center px-5 py-1  text-2xl text-white hover:bg-red-900 cursor-pointer'>Logout</Link>
<br/>
<br/>
    </div>
  )
}
