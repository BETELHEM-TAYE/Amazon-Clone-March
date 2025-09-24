import React, { useContext } from "react";
import Rating from "@mui/material/Rating";
import CuurencyFormat from "../CurrencyFormat/CurrencFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/actiontype";

function ProductCard({ product, flex, renderDesc, renderAdd }) {
  const { image, id, title, rating, price, description } = product;

  const [State, dispatch] = useContext(DataContext);

  const addToCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        id,
        title,
        rating,
        price,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.Card_container} ${
        flex ? classes.product_flexed : ""
      }`}
    >
      <Link to={`/products/${id}`}>
        <img src={image} alt="" className={classes.img_continer} />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* Rating component - check if rating exists */}
          {rating && <Rating value={rating.rate} precision={0.1} />}
          {/* Rating count - check if rating exists */}
          {rating && <small>{rating.count}</small>}
        </div>
      </div>
      <div>
        <CuurencyFormat amount={price} />
      </div>
      {renderAdd && (
        <button className={classes.button} onClick={addToCart}>
          add to cart
        </button>
      )}
    </div>
  );
}

export default ProductCard;
