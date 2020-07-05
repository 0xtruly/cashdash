import React, { createContext, useEffect, useState, useCallback } from 'react';
import { View } from 'react-native';
import { auth, createUserProfileDocument } from '../utils/firebase';

export const UserContext = createContext({ user: null });

const reducer = (state, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return {
        ...state,
        isSignedUp: true,
        signupSuccess: action.payload,
        signupError: action.payload,
      };
    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
        loginError: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
        reAuth: false,
      };
    default:
      return state;
  }
};

const UserProvider = ({ children }) => {
  const [state, setstate] = useState({
    user: null,
    loginError: null,
    signupError: null,
    isSignedUp: false,
    isAuthenticated: false,
    reAuth: false,
    signupSuccess: null,
    dispatch: (action) => setstate((state) => reducer(state, action)),
  });
  let unsubscribeFromAuth = null;

  const userState = useCallback(async () => {
    unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // if (userAuth) {
      //   const userRef = await createUserProfileDocument(userAuth);
      //   userRef.onSnapshot((snapshot) => {
      //     setstate({
      //       ...state,
      //       user: {
      //         uid: snapshot.id,
      //         ...snapshot.data(),
      //       },
      //     });
      //   });
      //   setstate({
      //     ...state,
      //     user: userAuth,
      //     reAuth: true,
      //   });
      // }
      setstate({
        ...state,
        user: userAuth,
        reAuth: userAuth ? true : false,
      });
    });
  }, []);

  useEffect(() => {
    userState();
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  console.log('authUser', JSON.stringify(state.user, null, 2));

  return <UserContext.Provider value={state}>{children}</UserContext.Provider>;
};

export default UserProvider;
