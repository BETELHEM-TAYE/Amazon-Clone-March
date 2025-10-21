import { useContext } from 'react'
import Layout from '../../Components/Layout/Layout'

import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import CurrencyFormat from '../../Components/Product/CurrencyFormat/CurrencyFormat';
import { Link } from 'react-router-dom';
import classes from "./cart.module.css"
import { Type } from '../../utility/actiontype';
import { IoIosArrowDown } from "react-icons/io";import { IoIosArrowUp } from "react-icons/io";

function Cart() {
 const [{basket},dispatch]=useContext(DataContext);
 const total=basket.reduce((amount,item)=>{
   return item.price*item.amount+amount
 },0)
const increment =(item)=>{
  dispatch({
    type:Type.ADD_TO_BASKET,
    item
})
}
const decrement =(id)=>{
  dispatch({
    type:Type.REMOVE_FROM_BASEKET,
    id
  })
}



  return (
    <Layout><br /><br /><br />
      <section className={classes.container}>
        <div className={classes.cart_container}>
          <br />
          <br />
          <h2>hello</h2>
          <h3>your shopping basket</h3>
          <hr />
          {basket?.length == 0 ? (
            <p>opps No item in your cart</p>
          ) : (
            basket?.map((item, index) => {
              return (
                <section key={index} className={classes.cart_product}>
                  <ProductCard
                    product={item}
                    renderDesc={true}
                    flex={true}
                    renderAdd={false}
                  />
                  <div className={classes.btn_container}>
                    <button
                      className={classes.btn}
                      onClick={() => increment(item)}
                    >
                      <IoIosArrowUp />
                    </button>
                    <span>{item.amount}</span>
                    <button
                      className={classes.btn}
                      onClick={() => decrement(item.id)}
                    >
                      <IoIosArrowDown />
                    </button>
                  </div>
                </section>
              );
            })
          )}
        </div>

        {basket?.length !== 0 && (
          <div className={classes.subtotal}>
            <div>
              <p>subtotal ({basket?.length} items)</p>
              <CurrencyFormat amount={total} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contain a gift</small>
            </span>
            <Link to="/payment">continue to checkout</Link>
          </div>
        )}
      </section>
    </Layout>
  );
}

export default Cart
