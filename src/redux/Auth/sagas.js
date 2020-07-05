import { put, takeEvery, take, call } from 'redux-saga/effects';
import { channel } from 'redux-saga';
import * as actions from './action';
import actionTypes from './actionTypes';
import axios from 'axios';
import { _auth, _dataBase } from '../../utils/firebase';
import { database } from 'firebase';

const {
  loginError,
  loginSuccess,
  logOutError,
  logOutSuccess,
  userReAuthError,
  userReAuthSuccess,
  signupError,
  signupSuccess,
} = actions;
const {
  INITIATE_LOGIN,
  INITIATE_LOGOUT,
  USER_REAUTH,
  INITIATE_SIGNUP,
} = actionTypes;

/**
 *
 * @param {*} 'payload' contains email and password
 * from user input.
 */
function* userSignin({ payload }) {
  const { email, password } = payload;
  const userObj = channel();
  try {
    yield _auth.signInWithEmailAndPassword(email, password).then((res) => {
      _dataBase
        .collection('users')
        .where('uid', '==', res.user.uid)
        .get()
        .then((querySnapshot) => {
          console.log(querySnapshot);
          querySnapshot.docs.map((doc) => {
            let userData = doc.data();
            console.log(userData);
            userObj.put(loginSuccess(userData));
          });
        });
    });
    while (true) {
      const action = yield take(userObj);
      yield put(action);
    }
  } catch (error) {
    yield put(loginError(error));
  }
}

function* reAuthenticateUser() {
  const userData = channel();
  try {
    yield _auth.onAuthStateChanged((user) => {
      if (user) {
        _dataBase
          .collection('users')
          .where('uid', '==', user.uid)
          .get()
          .then((querySnapshot) => {
            if (querySnapshot) {
              querySnapshot.docs.forEach((doc) => {
                let items = doc.data();
                console.log('userOBjectttt', items);
                userData.put(userReAuthSuccess(items));
              });
            }
          });
      }
    });
    while (true) {
      const action = yield take(userData);
      yield put(action);
    }

    // yield console.log(getCurrentUser());
  } catch (error) {
    yield put(userReAuthError(error));
  }
}

function* userLogout() {
  try {
    const req = yield _auth.signOut();
    yield put(logOutSuccess(req));
  } catch (error) {
    yield put(logOutError(error));
  }
}

function* userSignup({ payload }) {
  console.log('>>New payoad: ', payload);
  const { email, password, firstName, lastName } = payload;
  const userObj = channel();
  try {
    // const { user } = yield _auth.createUserWithEmailAndPassword(
    //   email,
    //   password,
    // );
    // console.log(user);
    // const body = {
    //   fullName: `${firstName}${' '}${lastName}`,
    //   email: user?.email,
    //   userId: user?.uid,
    //   createdAt: new Date(),
    //   wallet: {
    //     cashTag: `@${firstName}`,
    //     currency: 'NGN',
    //     balance: '',
    //     sent: '',
    //     received: '',
    //   },
    // };
    const url = 'http://localhost:5000/api/v1/createWallet';
    const body = {
      fullName: 'koffi uman',
      email: 'usma@ymail.com',
      userId: '3ddkd983',
      createdAt: '22/08/19',
      wallet: {
        cashTag: '@usman',
        currency: 'NGN',
        balance: '4000',
        sent: '1000',
        received: '5000',
      },
    };

    // yield call(
    //   axios
    //     .post(url, body)
    //     .then((res) => console.log('response', res))
    //     .catch((e) => console.log(JSON.stringify(e, null, 2))),
    // );


    // .then((user) => {
    //   _dataBase
    //     .collection('users')
    //     .doc(user.user.uid)
    //     .get()
    //     .then((snapshot) => {
    //       console.log('object', snapshot);

    //     })
    //     .then((data) => {
    //       console.log('Done', data);
    //     })
    //     .catch((err) => {
    //       console.log('ERRX: ', err);
    //     });
    //   userObj.put(signupSuccess(user));
    // })
    // .catch(function (error) {
    //   // Handle Errors here.
    //   var errorCode = error.code;
    //   var errorMessage = error.message;
    //   console.log(errorCode, errorMessage);
    // });
    // while (true) {
    //   const action = yield take(userObj);
    //   yield put(action);
    // }
  } catch (error) {
    yield put(signupError(error));
  }
}

export default function* userAuthSaga() {
  yield takeEvery(INITIATE_LOGIN, userSignin);
  yield takeEvery(USER_REAUTH, reAuthenticateUser);
  yield takeEvery(INITIATE_LOGOUT, userLogout);
  yield takeEvery(INITIATE_SIGNUP, userSignup);
}
