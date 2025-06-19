import CartTable from "@/components/CartTable";
import { fetchAllProducts } from "@/redux/actions";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const cart = () => {

const dispatch = useDispatch();
  
useEffect(() => {
  dispatch(fetchAllProducts());
}, [dispatch]);

  const { cart } = useSelector((state) => state.products);
  
  return (
    <div>
      {
        cart.length === 0 ? (
          <div className="container">
            <div className="text-center align-items-center justify-content-center vh-100 d-flex flex-column">
              <span>
                <ShoppingCart size={25} className="text-muted mb-3" />
                <h2 className="text-muted">Your Cart is Empty</h2>
              </span>
              <p className="text-muted">Add some products to your cart to see them here.</p>
              <Link href="/" className="btn btn-outline-dark">
                Go to Products
              </Link>
            </div>
          </div>
        ) : (
          <div className="container my-5">
            <CartTable />
          </div>
        )
      }
    </div>
  )
};

export default cart;
