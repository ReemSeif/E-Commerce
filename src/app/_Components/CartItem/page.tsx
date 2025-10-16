import { getID } from '@/app/utils/getProducts';
import { useCart } from '@/context/CartContext';
import React, { useEffect, useState } from 'react'

interface CartItemProps {
  id: number;
 
}
 function Cartitem({ id }: CartItemProps) {
const [product, setProduct] = useState<any>(null);
const {getItemsCount , addtoCart , decreaseCount , removeFromCart } = useCart();
const quantity = getItemsCount(id);
useEffect(() => {
    const fetchProduct = async () => {
      const data = await getID(id);
      setProduct(data);
    };
    fetchProduct();
  }, [id]);
  return (
    <>
     <ul className="space-y-4">
          <li className="flex items-center gap-4">
            <img
              src={product?.images[0]}
              alt=""
              className="size-16 rounded-sm object-cover"
            />

            <div>
              <h3 className="text-sm text-gray-900">{}</h3>

              <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
                <div>
                  <dt className="inline">price:</dt>
                  <dd className="inline">{product?.price}</dd>
                </div>

              </dl>
            </div>

            <div className="flex flex-1 items-center justify-end gap-2">
            {/* decrease button */}
            <button
              onClick={() => decreaseCount(id)}
              className="text-gray-600 transition hover:text-purple-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 12H6" />
              </svg>
            </button>

            {/* quantity display */}
            <input
              type="number"
              readOnly
              value={quantity}
              className="h-8 w-10 rounded-sm border-gray-200 bg-gray-50 text-center text-xs text-gray-600"
            />

            {/* increase button */}
            <button
              onClick={() => addtoCart(id)}
              className="text-gray-600 transition hover:text-purple-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m6-6H6"
                />
              </svg>
            </button>

            {/* delete button */}
            <button
              onClick={() => removeFromCart(id)}
              className="text-gray-600 transition hover:text-red-600"
            >
              <span className="sr-only">Remove item</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21
                    c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673
                    a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25
                    0 01-2.244-2.077L4.772 5.79m14.456
                    0a48.108 48.108 0 00-3.478-.397m-12
                    .562c.34-.059.68-.114 1.022-.165m0
                    0a48.11 48.11 0 013.478-.397m7.5
                    0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964
                    51.964 0 00-3.32 0c-1.18.037-2.09
                    1.022-2.09 2.201v.916m7.5 0a48.667
                    48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
          
          </li>
        </ul>

        <div className="mt-8 flex justify-end border-t border-gray-100 pt-8">
          <div className="w-screen max-w-lg space-y-4">
            


         
        </div>
    </div>
    </>
  )
}

export default Cartitem
