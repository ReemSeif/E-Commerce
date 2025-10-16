'use client'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'
import React, { useState } from 'react'
type props= {
  id: number
}
function CartBtn({id}: props) {
  const { addtoCart } = useCart();
   const [added, setAdded] = useState(false);
   const handleAdd = () => {
    addtoCart(id);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500); 
  };
  return (
    
     
     <button
          className="block w-full rounded-sm bg-purple-400 p-4 text-sm font-medium transition hover:scale-105"
          onClick={handleAdd}
        >
         {added ? '✅ Added!' : 'Add to Cart'}
        </button>
  
  )
}

export default CartBtn





       