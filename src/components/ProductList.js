import PlaceHolder from "@/components/PlaceHolder";
import ProductCard from "@/components/ProductCard";
import { fetchAllProducts } from "@/redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const ProductList = () => {

  const dispatch = useDispatch();
    
  useEffect (() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  const { products, fetchLoading, fetchError } = useSelector((state) => state.products);
    // console.log(products);



  return(
    <section className="px-2 px-sm-3 px-md-4 px-lg-5 text-center">
      {fetchLoading ? <PlaceHolder /> : ( 
        fetchError ? <h1 className="text-center text-danger">{fetchError}</h1> :
        <div className="container p-0 my-5">
          <h1 className="text-center">Product List</h1>
          <p className="text-center">Explore our wide range of products</p>
          <div className="row m-0 m-sm-2 m-md-3 m-lg-4 g-3 justify-content-center">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      )}  
    </section>
  )
};

export default ProductList;
