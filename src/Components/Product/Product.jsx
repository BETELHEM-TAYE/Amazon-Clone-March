import { useEffect, useState } from 'react'
import axios from "axios"
import ProductCard from './ProductCard'
import classes from "./product.module.css";
import Loader from '../Loader/Loader';
function Product() {
    const [product,setProduct]=useState([])
    const [isLoading, setisLoading]= useState(false)
    useEffect(()=>{
      setisLoading(true)
     axios.get("https://fakestoreapi.com/products").then((res)=>{
        setProduct(res.data)
        setisLoading(false)
    
     }).catch((err)=>{
        console.log(err)
        setisLoading(false)
     })
    },[])
    
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <section className={classes.product_container}>
          {product.map((singleProduct) => {
            return (
              <ProductCard product={singleProduct} key={singleProduct.id} 
              renderAdd={true}/>
            );
          })}
        </section>
      )}
    </>
  );
}

export default Product
