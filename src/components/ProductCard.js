import { addToCart, removeFromCart } from "@/redux/reducer";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { Slide, toast } from "react-toastify";



const ProductCard = ({ product }) => {

  const {cartItemPresent, cart} = useSelector((state) => state.products)

  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  }

  const handleAddToCart = (e) => {
    dispatch(addToCart(product));
    toast.success(`${product.title} added to cart`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide
    });
  }


  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-6">
        <div className="card d-flex align-items-center">
          <div className="container text-center">
            <img src={product?.image} className="card-img-top" alt={product?.title}/> 
            <div className="card-body">
              <p className="card-title">{product?.title}</p>
              <p className="card-text fw-bolder">${product?.price}</p>
              <p className="card-text fw-ligh">Availability: in-stock</p>
              <span className="d-flex justify-content-between align-items-center">
                <Link href={`/product/${product?.id}`} className="card-link fw-ligh">
                  <button className="btn btn-sm border-outline-dark">
                  View Details
                  </button>
                </Link>
                {
                  cartItemPresent
                      ? 
                  <button
                    onClick={() => handleRemoveFromCart(product?.id)}
                    className="btn btn-outline-dark btn-sm"
                    aria-label="remove item">
                    Remove from Cart
                    </button>
                    :
                    <button className="btn btn-sm border-outline-dark" onClick={handleAddToCart}>
                        Add to Cart
                    </button>
                }
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  export default ProductCard;
