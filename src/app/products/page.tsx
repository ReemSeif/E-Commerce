import React from 'react'
import { getProducts } from '../utils/getProducts'
import Link from 'next/link';
import CartBtn from '../_Components/AddtoCart/CartBtn';
import Image from 'next/image';
interface Product{
  id: number,
    title: string,
    price: number,
    category: string,
    images: string[],
    rating: number
}
 async function Products() {
 const {products}= await getProducts();
  return (
    <>
    <div className='p-6 mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
      {products.map((products:Product )=>(
        <div className='border border-gray-200' key={products.id}>
        <Image
      src={products?.images?.[0] || '/placeholder.jpg'}
      alt=""
      className="h-[200px] w-full object-cover transition duration-500 group-hover:scale-105 md:h-[350px]"
    />
  
    <div className="bg-white p-6 ">
      <span className="bg-yellow-400 px-3 py-1.5 text-xs font-medium whitespace-nowrap"> New </span>
  
      <h3 className="mt-4 text-lg font-medium truncate text-gray-900">{products?.title}</h3>
  
      <p className="mt-1.5 text-sm text-gray-700">{products?.price}EGP</p>
     
      <Link className="mt-1.5 text-sm hover:text-lg" href={`/products/${products.id}`}>View Details</Link>
       
       <CartBtn id={products.id}/>
      
    </div>
      </div>))}
   
    </div>
  
   
    </>
    
  
  )
}

export default Products