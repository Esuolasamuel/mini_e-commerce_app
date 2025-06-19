import { addToCart, removeFromCart } from "@/redux/reducer";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Slide, ToastContainer } from "react-toastify";


const ProductCard = ({ product }) => {

  const { cart } = useSelector((state) => state.products);
  const isProductInCart = cart.some(item => item.id === product.id);

  const dispatch = useDispatch();

  const handleRemoveFromCart = () => {
    dispatch(removeFromCart(product.id));
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
  }
  const handleAddToCart = () => {
    dispatch(addToCart(product)); 
    <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
  }

  return (
    <>
      <div className="col-md-4 col-lg-3 col-sm-6">
        <div className="card d-flex align-items-center">
          <div  className="ontainer text-center">
            <img src={product?.image} className="card-img-top" alt={product?.title}/> 
            <div className="card-body">
              <p className="card-title">{product?.title}</p>
              <p className="card-text fw-bolder">${product?.price}</p>
              <p className="card-text fw-ligh">Availability: in-stock</p>
              <div  className="text-center">
                <Link href={`/product/${product?.id}`} className="card-link fw-ligh">
                  <button className="btn btn-sm border-outline-dark">
                  View Details
                  </button>
                </Link>
              </div>
                {
                isProductInCart
                  ?
                  <button onClick={handleRemoveFromCart}>
                        Remove from cart
                  </button>      
                  :
                  <button onClick={handleAddToCart}>
                    add to cart
                  </button >
                }
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  export default ProductCard;
