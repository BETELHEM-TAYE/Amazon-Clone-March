import {useEffect, useState}from 'react'
import Layout from '../../Components/Layout/Layout'
import {useParams} from "react-router-dom"
import classes from "./Results.module.css"
import axios from "axios"
import { productUrl } from '../../API/endPoints'
import ProductCard from '../../Components/Product/ProductCard'
import Loader from '../../Components/Loader/Loader'
function Results() {
   const [result, setResult] = useState([]);
   const [isLoading,setisLoading] = useState(false)
   const { categoryName } = useParams();
   useEffect(()=>{
    setisLoading(true)
     axios.get(`${productUrl}/products/category/${categoryName}`)
       .then((res) => {
         setResult(res.data);
         setisLoading(false);

       })
       .catch((err) => {
         console.log(err);
         setisLoading(false);
       });
   },[categoryName])
  
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <section>
          <br />
          <h1 style={{ padding: "30px" }}>Results</h1>
          <p style={{ padding: "30px" }}>Category / {categoryName}</p>
          <hr />
          <div className={classes.products_container}>
            {result.map((product) => (
              <ProductCard key={product.id} product={product} 
              renderAdd={true}/>
            ))}
          </div>
        </section>
      )}
    </Layout>
  );
}

export default Results
