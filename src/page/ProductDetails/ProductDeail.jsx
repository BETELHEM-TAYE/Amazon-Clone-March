import {useEffect, useState}from 'react'
import Layout from '../../Components/Layout/Layout'
import axios from "axios"
import { productUrl } from '../../API/endPoints'
import ProductCard from "../../Components/Product/ProductCard"
import{useParams} from "react-router-dom"
import Loader from '../../Components/Loader/Loader'

function ProductDeail() {
       const [product, setProduct] = useState([]);
       const [isLoading,setisLoading]= useState(false)
       const { productId} = useParams();
       useEffect(() => {
        setisLoading(true)
         axios
           .get(`${productUrl}/products/${productId}`)
           .then((res) => {
             setProduct(res.data);
             setisLoading(false)
           })
           .catch((err) => {
             console.log(err);
             setisLoading(false)
           });
       }, [productId]);
  return (
  <Layout><br /><br /><br />
    {isLoading?(<Loader/>) :(
        <ProductCard 
        product={product}
        flex={true}
        renderDesc={true}
        renderAdd={true}
        />)}
  </Layout>)
}

export default ProductDeail
