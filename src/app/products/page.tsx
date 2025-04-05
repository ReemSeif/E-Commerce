import React from 'react'
import { getProducts } from '../utils/getProducts'
import Link from 'next/link';

interface Product{
  id: number,
    title: string,
    price: number,
    category: string,
    image: string,
    rating: { rate: number, count: number }
}
 async function Products() {
 const data= await getProducts();
  return (
    <>
    <div className='p-6 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      {data.map((products:Product )=>(
        <div className='border border-gray-100' key={products.id}>
        <img
      src={products.image}
      alt=""
      className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
    />
  
    <div className="relative  bg-white p-6 ">
      <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> New </span>
  
      <h3 className="mt-4 text-lg font-medium text-gray-900">{products.title}</h3>
  
      <p className="mt-1.5 text-sm text-gray-700">{products.price}EGP</p>
     
        <Link className="mt-1.5 text-sm hover:text-lg" href={`/products/${products.id}`}>View Details</Link>
       
  
      
    </div>
      </div>))}
   
    </div>
  
   
    </>
    
  
  )
}

export default Products