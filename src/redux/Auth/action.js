import actionTypes from './actionTypes';

const {
	INITIATE_LOGIN,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	INITIATE_LOGOUT,
	USER_REAUTH,
	USER_REAUTH_ERROR,
	USER_REAUTH_SUCCESS,
	LOGOUT_ERROR,
	LOGOUT_SUCCESS,

	INITIATE_SIGNUP,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS
} = actionTypes;


export const loginUser = value => ({
	payload: value,
	type: INITIATE_LOGIN,
});

export const loginSuccess = payload => ({
	payload,
	type: LOGIN_SUCCESS,
});

export const loginError = payload => ({
	payload,
	type: LOGIN_ERROR,
});

export const userReAuth = payload => ({
	payload,
	type: USER_REAUTH,
});

export const userReAuthError = payload => ({
	payload,
	type: USER_REAUTH_ERROR,
});

export const userReAuthSuccess = payload => ({
	payload,
	type: USER_REAUTH_SUCCESS,
});

export const logOut = payload => ({
	payload,
	type: INITIATE_LOGOUT,
});

export const logOutError = error => ({
	payload: error,
	type: LOGOUT_ERROR,
});

export const logOutSuccess = payload => ({
	payload,
	type: LOGOUT_SUCCESS,
});


export const signup = payload => ({
	payload,
	type: INITIATE_SIGNUP,
});

export const signupError = error => ({
	payload: error,
	type: SIGNUP_ERROR,
});

export const signupSuccess = payload => ({
	payload,
	type: SIGNUP_SUCCESS,
});
