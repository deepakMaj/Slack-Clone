import React, { useEffect, useReducer } from 'react'
import { SET_USER, CLEAR_USER, OPEN_SIDEBAR } from '../types';
import UserContext from './userContext';
import UserReducer from './userReducer';
import { auth, createOrGetUserProfileDocument } from '../../firebase';

const UserState = props => {

  const initialState = { user: null, loading: true, sidebar: false };
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

  const openSidebar = () => dispatch({ type: OPEN_SIDEBAR })

  const { user, loading, sidebar } = state;

  return (
    <UserContext.Provider value={{
      user,
      loading,
      sidebar,
      clearUser,
      openSidebar
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserState
