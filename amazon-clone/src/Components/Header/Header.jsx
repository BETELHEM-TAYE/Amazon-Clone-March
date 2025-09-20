import classes from "./Header.module.css";
import { CiLocationOn } from "react-icons/ci";
import { IoSearch } from "react-icons/io5";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";

function Header() {
  //consume the value
  const [{ basket }] = useContext(DataContext);
  // console.log(basket);
  //use reduce function and add them to the previous
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);

  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amazon log"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <CiLocationOn />
              </span>
              {/* icon */}
              <div>
                <p>Delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* search */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="search products" />
            <IoSearch size={38} />
          </div>

          {/* right side link */}
          <div className={classes.order_container}>
            <Link className={classes.language}>
              <img
                src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </Link>

            {/* three componenets */}
            {/* signIN */}
            <Link to="./">
              <div>
                <>
                  <p>Hello, Sign In</p>
                  <span>Account & Lists</span>
                </>
              </div>
            </Link>
            {/* orders */}
            <Link to="/orders">
              <div>
                <p>returns</p>
                <span>& Orders</span>
              </div>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <BiCart size={35} />
              {/* it can use direct array property */}
              {/* <span>{basket.length}</span> */}
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
        <LowerHeader />
      </section>
    </>
  );
}

export default Header;
