'use client'
import Cartitem from '@/app/_Components/CartItem/page';
import { getID } from '@/app/utils/getProducts';
import { useCart } from '@/context/CartContext';
import React, { useEffect, useState } from 'react'

function Cart() {
   const { cartitems } = useCart();
    const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const calculateTotal = async () => {
      let newTotal = 0;
      for (const item of cartitems) {
        const product = await getID(item.id);
        newTotal += product.price * item.quantity;
      }
      setTotal(newTotal);
    };
    calculateTotal();
  }, [cartitems]);
  return (
      <section>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
    <div className="mx-auto max-w-3xl">
      {
          cartitems.length >0 && 
      <header className="text-center">
        <h1 className="text-xl font-bold text-gray-900 sm:text-3xl">Your Cart</h1>
      </header>
}
      <div className="mt-8">
        {
          cartitems.length === 0 ? 
           <p className='text-center'>Your cart is empty 🛍️</p>
           :(
            
             cartitems?.map((item)=> {
               return <Cartitem key={item.id} {...item}/>
              
             })

           )
         
        }
        {
          cartitems.length >0 &&  <dl className="space-y-0.5 text-sm text-gray-700">
              <div className="flex justify-between !text-base font-medium">
                <dt>Total</dt>
                <dd>{total.toFixed(2)}</dd>
              </div>
            </dl>
        }
       
       </div>
       </div>
  </div>
</section>

  )
}

export default Cart