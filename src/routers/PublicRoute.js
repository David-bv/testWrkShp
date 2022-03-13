import React from 'react'
import { Navigate } from 'react-router-dom'

const PublicRoute = ({isAuthenticated, children}) => {
  return isAuthenticated === false
  ? children
  : <Navigate to='/*'/>
}

export default PublicRoute