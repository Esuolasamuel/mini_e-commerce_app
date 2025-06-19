import { addToCart, removeFromCart } from "@/redux/reducer";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Bounce, Slide, toast, ToastContainer } from "react-toastify";


const ProductCard = ({ product }) => {

  const { cart } = useSelector((state) => state.products);
  const isProductInCart = cart.some(item => item.id === product.id);

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    toast.warn( `${product.title} removed from cart`, {
    position: "top-right",
    autoClose: 5,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    toast.success(`${product.title} added to cart`, {
    position: "top-right",
    autoClose: 5,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
    });
  }

  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-6">
        <div className="card d-flex align-items-center">
          <div className="container text-center">
            <img src={product?.image} className="card-img-top" alt={product?.title}/> 
            < div className="card-body">
              <p className="card-title text-truncate">{product?.title}</p>
              <p className="card-text fw-bolder">${product?.price}</p>
              <p className="card-text fw-ligh">Availability: in-stock</p>
              <div className="row d-flex align-items-center justify-content-between">
                 <Link href={`/product/${product?.id}`} className="card-link fw-ligh col-lg-6 col-md-12 px-sm-0 px-md-2 my-md-1 my-md-0">
                  <button className="btn btn-sm btn-outline-dark">
                  View Details
                  </button>
                </Link>
                {
                isProductInCart
                  ?
                  <button onClick={handleRemoveFromCart} className="btn btn-sm btn-outline-dark col-lg-6 col-md-12 px-sm-0 px-md-2 my-md-1 my-md-0">
                        Remove from Cart
                  </button>      
                  :
                  <button onClick={handleAddToCart} className="btn btn-sm btn-outline-dark col-lg-6 col-md-12 px-sm-0 px-md-2 my-md-1 my-md-0">
                    Add to Cart
                  </button >
                }
               </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  export default ProductCard;
