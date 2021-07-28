import React from 'react'
import {Redirect,Route} from "react-router-dom";
import Cookies from 'js-cookie'

function PrivateRoute ({ children, ...rest }) {
    const accessToken=localStorage.getItem('status');
    console.log(accessToken)

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