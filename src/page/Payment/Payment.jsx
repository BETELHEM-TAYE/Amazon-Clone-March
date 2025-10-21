import { useContext, useState } from 'react'
import Layout from '../../Components/Layout/Layout'
import Classes from "./payment.module.css"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import ProductCard from '../../Components/Product/ProductCard'
import { useElements, useStripe , CardElement} from '@stripe/react-stripe-js'
import CurrencyFormat from '../../Components/Product/CurrencyFormat/CurrencyFormat'
import { axiosInstance } from '../../API/axios'
import{ ClipLoader} from "react-spinners"
import { db } from '../../utility/firebase'
import { useNavigate } from 'react-router-dom'
import { Type } from '../../utility/actiontype'

function Payment() {
  const [{basket,user},dispatch]=useContext(DataContext)
  const totalItem=basket?.reduce((amount,item)=>{
    return item.amount+amount
  },0)
   const total = basket.reduce((amount, item) => {
     return item.price * item.amount + amount;
   }, 0);
  const [carderror,setCarderror]=useState(null); 
  const [processing,setProcessing]=useState(false);
  const stripe= useStripe();  
  const elements= useElements();
   const navigate = useNavigate();
  const handlechange = (e) => {
    setCarderror(e?.error?.message || "");
  };
const handlePayment = async (e) => {
  e.preventDefault();

  try {
    setProcessing(true);

    // 1. Backend call (functions) --> contact to the client secret
    const response = await axiosInstance({
      method: "POST",
      url: `/payment/create?total=${total * 100}`,
    });

    console.log(response.data);
    const clientSecret = response?.data?.clientSecret;

    // 2. Client side (react side confirmation)
    const {paymentIntent} = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    console.log(paymentIntent);

    // 3. After the confirmation --> order firestore database save
    await db
      .collection("users")
      .doc(user.uid)
      .collection("orders")
      .doc(paymentIntent.id)
      .set({
        basket: basket,
        amount: paymentIntent.amount,
        created: paymentIntent.created,
      });
      dispatch({
      type : Type.EMPTY_BASKET
      })

    setProcessing(false);
    navigate("/orders",{state:{msg:"you have placed new order"}})
  } catch (error) {
    console.log(error);
    setProcessing(false);
  }
};


  return (
    <Layout>
      <br />
      <br />
      <div className={Classes.payment_header}>Checkout ({totalItem}) items</div>
      <section className={Classes.payment}>
        <div className={Classes.flex}>
          <h3>Delivery Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React Lane</div>
            <div>Chicago, IL</div>
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Review items and Delivery</h3>
          <div>
            {basket?.map((item) => (
              <ProductCard key={item.id} product={item} flex={true} />
            ))}
          </div>
        </div>
        <hr />
        <div className={Classes.flex}>
          <h3>Payment method</h3>
          <div className={Classes.payment_card_container}>
            <div className={Classes.payment_details}>
                <form onSubmit={handlePayment}>
                {carderror && (
                  <small style={{ color: "red" }}> {carderror}</small>
                )}
                <CardElement onChange={handlechange} />
              
              <div className={Classes.payment_price}>
                <div>
                  <span style={{display:"flex", gap:"10px"}}>
                    <p>
                      Total Order | </p><CurrencyFormat amount={total} />
                    
                  </span>
                </div>
                <button type='submit'>
                  {
                    processing?(
                      <div className={Classes.loader}>
                        <ClipLoader color='gray'size= {12}/>
                        <p>please wait...</p>
                      </div>
              
                    ):" Pay Now"
                  }
                 </button>
                
              </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Payment
