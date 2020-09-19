import React, { useEffect, useReducer } from 'react'
import { SET_USER, CLEAR_USER } from '../types';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { auth, createOrGetUserProfileDocument } from '../../firebase';

const UserState = props => {

  const initialState = { user: null, loading: true };
  const [state, dispatch] = useReducer(UserReducer, initialState);

  useEffect(() => {
    auth.onAuthStateChanged(async userAuth => {
      const userRef = await createOrGetUserProfileDocument(userAuth);
      console.log(userAuth);
      if (userAuth) {
        userRef.onSnapshot(snapshot => {
          dispatch({ type: SET_USER, payload: snapshot });
        });
      }
      else {
        dispatch({ type: CLEAR_USER });
      }
    });
  }, []);

  const clearUser = () => {
    dispatch({ type: CLEAR_USER });
  }

  const { user, loading } = state;

  return (
    <UserContext.Provider value={{
      user,
      loading,
      clearUser
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
