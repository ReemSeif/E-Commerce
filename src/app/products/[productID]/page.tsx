import { getID } from '@/app/utils/getProducts';
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

   
    <div className='p-6 mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
      <img
    src={data?.image}
    alt=""
    className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
  />

  <div className="relative  bg-white p-6 ">
   

    <h3 className="mt-4 text-lg font-medium text-gray-900">{data?.title}</h3>
    <h6 className="mt-4 text-lg font-medium text-gray-900">{data?.description}</h6>
    <p className="mt-1.5 text-sm text-gray-700">{data?.price}EGP</p>
    <p className="mt-1.5 text-sm text-gray-700">{data?.rating.rate}⭐</p>
    <p className="mt-1.5 text-sm text-gray-700">{data?.rating.count} in stock</p>
   </div>
   </div>
  )
}

export default ProductDetails