import React, { useEffect, useState } from "react";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { producturl } from "../../Api/endPoints";
import ProductCard from "../../Components/Product/ProductCard";

import Loader from "../../Components/Loader/Loader";

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
    <LayOut>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
        />
      )}
    </LayOut>
  );
}

export default ProductDetail;
