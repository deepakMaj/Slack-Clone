import React, { Fragment, useContext } from 'react';
import { signInWithGoogle } from '../firebase';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/user/userContext';

function SignIn() {
  const userContext = useContext(UserContext);
  if (userContext.user) {
    return <Redirect to="/" />
  }
  return (
    <Fragment>
      <img src={require('./static/background.jpg')} alt="" className="background" />
      <div className="signin-form">
        <h1 style={{ fontSize: "3.5rem", color: "#fff" }}>Sign In</h1>
        <button className="google-btn" onClick={signInWithGoogle}>
          <img src="https://img.icons8.com/color/50/000000/google-logo.png" alt="" />
          <span style={{ verticalAlign: "20px", marginLeft: "6px" }}>Sign in with google</span>
        </button>
      </div>
    </Fragment>
  )
}

export default SignIn
