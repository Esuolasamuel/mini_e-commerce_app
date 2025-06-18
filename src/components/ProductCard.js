import Link from "next/link";


const ProductCard = ({ product }) => {
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
              <span className="text-center">
                <Link href={`/product/${product?.id}`} className="card-link fw-ligh">
                  <button className="btn btn-sm border-outline-dark">
                  View Details
                  </button>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

  export default ProductCard;
