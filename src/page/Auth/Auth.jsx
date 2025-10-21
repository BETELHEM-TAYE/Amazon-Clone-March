import { useContext, useState } from 'react'
import classes from "./signup.module.css"
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { auth } from '../../utility/firebase'
import { signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import { DataContext } from '../../Components/DataProvider/DataProvider'
import { Type } from '../../utility/actiontype'
import{ ClipLoader} from "react-spinners"
function Auth() {
  const[email,setEmail]= useState("");
  const [password, setPassword] = useState("");
  const [error, setEror] = useState("");
  const [{user},dispatch] =useContext(DataContext);
  const[loading,setLoading]=useState({signin:false,
    signup:false
  })
  const navigate = useNavigate()
  const navStateData = useLocation()

   console.log(user)

  const authHandler= async(e)=>{
    e.preventDefault();
    // console.log(e.target.name);
    if(e.target.name == "signin"){
      setLoading({...loading,signin:true})
      signInWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        });
        setLoading({...loading,signin:false});
        navigate(navStateData?.state?.redirect || "/");
      }).catch((err)=>{
        setEror(err.message)
        setLoading({ ...loading, signin: false });
      })
    }else{
      setLoading({ ...loading, signup: true });
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          
            dispatch({
          type:Type.SET_USER,
          user:userInfo.user
        })
        setLoading({ ...loading, signup: false });
         navigate(navStateData?.state?.redirect|| "/");
          
        })
        .catch((err) => {
         setEror(err.message);
         setLoading({ ...loading, signup: false });
        });
    }
  }











  return (
    <section className={classes.login}>
      <Link to ="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAE2DsdF6RJ3eiqVxPqVmsDix7QsIkFS_sVA&s"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg &&(
           <small style={{
            padding:"5px",
            textAlign:"center",
            color:"red",
            fontweight:"bold",
           }

           }>
            {navStateData?.state?.msg}
           </small>
        )
          
        }
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
            />
          </div>
          <button
            type="submit"
            onClick={authHandler}
            name="signin"
            className={classes.login_siginbtn}
          >
            {loading.signin ? (
              <ClipLoader color="#000" size={15}></ClipLoader>
            ) : (
              " Sign In"
            )}
          </button>
        </form>
        <p>
          By sining-in you agre to the AMAZON FAKE CLONE conditions of use &
          sale.please see our Privacy Notice, our Cookies Notice and our
          Interest-Based Ads Notice.
        </p>
        <button
          type="submit"
          onClick={authHandler}
          name="signup"
          className={classes.login_signupbtn}
        >
          {" "}
          {loading.signup ? (
            <ClipLoader color="#000" size={15}></ClipLoader>
          ) : (
            "Create your Amazon Account"
          )}
        </button>
        {error && (
          <small style={{ paddingTop: "5px", color: "red" }}>{error}</small>
        )}
      </div>
    </section>
  );
}

export default Auth
