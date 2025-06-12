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
    <div>
      {fetchLoading ? <PlaceHolder /> : ( 
        fetchError ? <h1 className="text-center text-danger">{fetchError}</h1> :
        <div className="container p-0 my-5">
          <h1 className="text-center">Product List</h1>
          <p className="text-center">Explore our wide range of products</p>
          <div className="row m-0">
            {products.map((product) => (
              <ProductCard key={product.id} product={product}/>
            ))}
          </div>
        </div>
      )}
    </div>
  )
};

export default ProductList;
