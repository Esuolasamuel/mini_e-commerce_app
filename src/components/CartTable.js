import { decrementQuantity, incrementQuantity, removeFromCart } from '@/redux/reducer';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const CartTable = () => {
  const {cart} = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const totalPrice = cart?.reduce((total, item) => total + item.price * item.quantity, 0);

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleIncrement = (id) => {
    dispatch(incrementQuantity(id));
  }

  const handleDecrement = (id) => {
    dispatch(decrementQuantity(id));
  }

  if (cart === 0) {
    <div className="container">
      <div className="justify-content-center align-item- center vh-100">
        <ShoppingCart className='fs-2'/>
      </div>
    </div>
  }
  return (
    <div className='card shadow-sm'>
      <h2 className="card-title text-dark my-4 text-center">Your Shopping Cart</h2>
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle ">
          <thead className="table-light">
            <tr>
              <th scope='col'>ITEM</th>
              <th scope='col'>CATEGORY</th>
              <th scope='col'>PRICE</th>
              <th scope='col'>QUANTITY</th>
              <th scope='col'>SUBTOTAL</th>
              <th scope='col'>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id}>
                <td>
                  <div className="d-flex align-items-center"></div>
                    <div className='d-flex align-items-center'>
                    <img src={item.image} alt={item.title} className='img-thumbnail me-3' style={{ width: "50px", height: "50px", objectFit: "contain" }} />
                    <div className="fw-normal">{item.title}</div>
                  </div>
                </td>
                <td>{item.category}</td>
                <td>${item.price.toFixed(2)}</td>
                <td>
                  <div className="d-flex align-items-center">
                    <button onClick={() => handleDecrement(item.id)}
                      className='btn btn-outline-secondary btn-sm rounded-circle me-1 ms-1'
                      aria-label="decrement quantity">
                      <Minus size={16}/>
                    </button>
                    <span className='fw-bold text-center'>{item.quantity}</span>
                    <button onClick={() => handleIncrement(item.id)}
                      className='btn btn-outline-secondary btn-sm rounded-circle me-1 ms-1'
                      aria-label="increment quantity">
                      <Plus size={16}/>
                    </button>
                  </div>
                </td>
                <td><span className=' text-dark text-center'>${(item.price * item.quantity).toFixed(2)}</span></td>
                <td>
                  <button
                    onClick={() => handleRemoveFromCart(item.id)}
                    className="btn btn-outline-danger btn-sm"
                    aria-label="remove item">
                    <Trash2 size={18}/>
                    </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="table-light">
            <tr>
              <td colSpan={4} className="text-end fw-bold fs-5"></td>
              <td className="text-start fw-bold fs-3 text-dark display-6">
                ${totalPrice.toFixed(2)}
              </td>
              <td colSpan={1}></td>
            </tr>
          </tfoot>
        </table>
        <div className="text-center d-flex justify-content-center align-items-center gap-3 my-4">
          <a className="btn btn-outline-dark">
            Proceed to Checkout
            </a>
          <Link href="/" className="btn btn-outline-dark">
             Go to Products
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartTable