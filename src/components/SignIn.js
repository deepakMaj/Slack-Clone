import React, { useContext } from 'react';
import { signInWithGoogle } from '../firebase';
import { Redirect } from 'react-router-dom';
import UserContext from '../context/user/userContext';

function SignIn() {
  const userContext = useContext(UserContext);
  if (userContext.user) {
    return <Redirect to="/" />
  }
  return (
    <div className="signin-form">
      <h1>Sign In</h1>
      <button className="google-btn" onClick={signInWithGoogle}>
        Sign in with google
      </button>
    </div>
  )
}

export default SignIn
