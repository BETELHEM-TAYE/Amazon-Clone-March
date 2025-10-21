import { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { DataContext } from '../DataProvider/DataProvider'
import PropTypes from 'prop-types'

const ProtectedRoute = ({children,msg,redirect}) => {
const navigate =useNavigate()
const [{user}]=useContext(DataContext)
useEffect(()=>{
    if (!user){
        navigate("/auth",{state:{msg,redirect}})
    }

},[user, navigate, msg, redirect])

  return children;
}

ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
  msg: PropTypes.string.isRequired,
  redirect: PropTypes.string.isRequired,
};

export default ProtectedRoute
