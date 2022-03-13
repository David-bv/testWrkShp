import React from 'react'
import { Navigate } from 'react-router-dom'

const PrivateRote = ({isAuthenticated, children}) => {
  return  isAuthenticated
  ? children: <Navigate to={'/login'} />
}

export default PrivateRote