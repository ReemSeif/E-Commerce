import CartBtn from '@/app/_Components/AddtoCart/CartBtn';
import { getID } from '@/app/utils/getProducts';
import Image from 'next/image';
import React from 'react'

interface Props{
params:Promise<{
  productID:string
}>
}
async function ProductDetails({params} : Props) {
  const {productID}= await params;
  const data= await getID(Number(productID));
  return (

   
   <div className="p-6 mt-8 grid gap-4 sm:grid-cols-1 md:grid-cols-2 justify-items-center mx-auto max-w-6xl">
     <div>
      <Image
    src={data?.images[0]}
    alt=""
    className="h-[350px] border border-gray-200 rounded-md w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
  />
     </div>
      

  <div className="relative bg-white p-6 ">
   

    <h3 className="mt-4 text-lg font-medium text-gray-900">{data?.title}</h3>
    <h6 className="mt-4 text-sm font-light text-gray-900">{data?.description}</h6>
    <p className="mt-1.5 text-xs text-gray-700">{data?.price}EGP</p>
    <p className="mt-1.5 text-xs text-gray-700">{data?.rating}⭐</p>
    <p className="mt-1.5 text-xs text-gray-700">{data?.stock} in stock</p>
     <div className='mt-4'><CartBtn id={Number(productID)}/></div>
   </div>
   </div>
  )
}

export default ProductDetails