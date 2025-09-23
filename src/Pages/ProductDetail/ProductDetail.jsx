import React, { useEffect, useState } from "react";
import Layout from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

import Loder from "../../Components/Loder/Loder";

function ProductDetail() {
  const [product, setproduct] = useState({});
  const [isLoading, setISLoading] = useState(false);
  const { productId } = useParams();
  useEffect(() => {
    setISLoading(true);

    axios
      .get(`${producturl}/products/${productId}`)
      .then((res) => {
        setproduct(res.data);
        setISLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setISLoading(false);
      });
  }, [productId]);
  return (
    <Layout>
      {isLoading ? (
        <Loder />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
