import React from 'react'
import {Redirect,Route} from "react-router-dom";


function PrivateRoute ({ children, ...rest }) {
    const accessToken=localStorage.getItem('status');
  

    return (
      <Route {...rest} render={({location}) => {
        return accessToken
          ? children
          : <Redirect to={{
              pathname:'/login',
              state:{from:location}
          }} />
      }} />
    )
  }


  export default PrivateRoute;