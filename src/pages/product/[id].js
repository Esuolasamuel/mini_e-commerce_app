import PlaceHolder from '@/components/PlaceHolder';
import Layout from '@/navigation/Layout';
import { fetchAProduct } from '@/redux/actions';
import { addToCart } from '@/redux/reducer';
import Link from 'next/link';
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Slide, toast } from 'react-toastify';

const ProductDetail = () => {

  const router = useRouter();

  const dispatch = useDispatch();

  const { product, productLoading, fetchError } = useSelector((state) => state.products);

  const handleAddToCart = (e) => {
    dispatch(addToCart(product))
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
  const { id } = router.query;

  useEffect(() => {
    dispatch(fetchAProduct(id))
  }, [id])
  
  return (
    <Layout pageTitle={`${product?.title} product`}>
      {productLoading ? <PlaceHolder/> : (
        fetchError ? <h1 className='text-center text-danger'></h1> :(
        <div className="container-fiuld  p-3 m-5">
          <section className="Generic">
            <header className="header-text text-center">
              <h1 className='text-uppercase'>{product?.category}</h1>
              <hr/>
              <p className='my-2 fw-lighter fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu lacus imperdiet, cursus erat vitae, dictum nulla. Mauris et euismod sed nunc. Proin vel rhoncus mauris. Quisque mattis dictum etiam.</p>
            </header>
              <main className="row m-md-5 p-md-5 m-sm-0 p-sm-0 d-flex justify-content-between">
              <div className='image-container text-center col-md-6 col-sm-12'>
                <img src={product?.image} alt={product?.title} className="img-fluid"/>
              </div>
            <div className="main-text col-md-6 col-sm-12">
              <br />
              <h2>{product?.title} Details</h2>
                <br />
              <p className='fw-lighter fs-6 lh-base text-capitalize'>{product?.description}</p>
                <br />    
              <p className='fw-bold fs-3'>${product?.price}</p>
                <br />
              <p className='fw-lighter fs-6'>{product?.rating?.count} reviews</p>
                  <br />
              <div className='d-flex justify-content'>
              <p className='fw-lighter fs-6'>
                    {product?.rating?.rate} rating</p>
              <span className='ms-2 fs-6'>
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star-fill me-1"></i>    
                    <i className="bi bi-star-fill me-1"></i>    
                    <i className="bi bi-star-fill me-1"></i>
                    <i className="bi bi-star"></i>
              </span>
              </div>
                <br />
              <Link href="/cart" onClick={handleAddToCart} className=''>
                <button className="shadow px-5 p-3 mb-5 bg-body rounded border-0">
                    Add to Cart
                </button>
              </Link>
            </div>
            </main>
              <hr/>
          </section>
        </div>
      ))}
    </Layout>
  )
}

export default ProductDetail