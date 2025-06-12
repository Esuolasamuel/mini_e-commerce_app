import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useSelector } from 'react-redux'

const CartIcon = () => {
  const { cart } = useSelector((state) => state.products);
  const totalQuantity = cart?.reduce((total, item) => total + item.quantity, 0);
  return (
    <div className="position-relative">
      <ShoppingCart className="fw-bold"/>
      
      {
        totalQuantity > 0 && (
          <span className='position-absolute top-0 start-100 translate-middle badge bg-red-500 text-dark rounded-pill px-2 py-1 text-xs fw-bold'>
            {totalQuantity}
          </span>
        )
      }
    </div>
  )
}

export default CartIcon