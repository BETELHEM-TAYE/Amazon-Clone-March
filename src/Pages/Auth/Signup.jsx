import React, { useContext, useState } from 'react';
import classes from './Signup.module.css';
import LayOut from '../../Components/LayOut/LayOut';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { auth } from '../../Utility/firebase';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
import { DataContext } from '../../Components/DataProvider/DataProvider';
import { Type } from '../../Utility/actiontype.jsx';
import { ClipLoader } from 'react-spinners';

function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [{ user }, dispatch] = useContext(DataContext);
  const [loading, setLoading] = useState({ signin: false, signup: false });
  const navigate = useNavigate();
  const navStateData = useLocation();

  const validatePassword = () => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!passwordRegex.test(password)) {
      setError('Password must be at least 6 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return false;
    }
    return true;
  };

  const authHandler = async (e) => {
    e.preventDefault();
    if (e.target.name === 'signin') {
      setLoading({ ...loading, signin: true });
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({ type: Type.SET_USER, user: userInfo.user });
          setLoading({ ...loading, signin: false });
          navigate(navStateData?.state?.redirect || '/');
        })
        .catch((err) => {
          setError(err.message);
          setLoading({ ...loading, signin: false });
        });
    } else {
      if (validatePassword()) {
        setLoading({ ...loading, signup: true });
        createUserWithEmailAndPassword(auth, email, password)
          .then((userInfo) => {
            dispatch({ type: Type.SET_USER, user: userInfo.user });
            setLoading({ ...loading, signup: false });
            navigate(navStateData?.state?.redirect || '/');
          })
          .catch((err) => {
            setError(err.message);
            setLoading({ ...loading, signup: false });
          });
      }
    }
  };

  return (
    <section className={classes.login}>
      <Link to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAE2DsdF6RJ3eiqVxPqVmsDix7QsIkFS_sVA&s"
          alt="amazon logo"
        />
      </Link>
      <div className={classes.login_container}>
        <h1>Sign In</h1>
        {navStateData?.state?.msg && (
          <small style={{ padding: '5px', textAlign: 'center', color: 'red', fontWeight: 'bold' }}>
            {navStateData.state.msg}
          </small>
        )}
        <form action="">
          <div>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" id="password" />
          </div>
          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              id="confirmPassword"
            />
          </div>
          <button type="submit" onClick={authHandler} name="signin" className={classes.login_siginbtn}>
            {loading.signin ? <ClipLoader color="#000" size={15} /> : 'Sign In'}
          </button>
        </form>
        <p>
          By signing-in, you agree to the AMAZON FAKE CLONE conditions of use & sale. Please see our Privacy Notice, our
          Cookies Notice, and our Interest-Based Ads Notice.
        </p>
        <button type="submit" onClick={authHandler} name="signup" className={classes.login_signupbtn}>
          {loading.signup ? <ClipLoader color="#000" size={15} /> : 'Create your Amazon Account'}
        </button>
        {error && <small style={{ paddingTop: '5px', color: 'red' }}>{error}</small>}
      </div>
    </section>
  );
}

export default Auth;
