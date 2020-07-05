import actionTypes from './actionTypes';

const {
	INITIATE_LOGIN,
	LOGIN_ERROR,
	LOGIN_SUCCESS,
	INITIATE_LOGOUT,
	LOGOUT_ERROR,
	LOGOUT_SUCCESS,
	USER_REAUTH,
	USER_REAUTH_ERROR,
	USER_REAUTH_SUCCESS,
	SIGNUP_ERROR,
	SIGNUP_SUCCESS,
	INITIATE_SIGNUP

} = actionTypes;

const initialState = {
	authenticatedUser: null,
	isLoading: true,
	isLoggingin: false,
	isLoggingout: false,
	isLoggedout: false,
	isAuthenticated: false,
	isAuthenticating: false,
	loginError: null,
	logoutError: null,

	signupsuccess: false,
	signuperror: false
};

export default (state = initialState, { type, payload }) => {
	switch (type) {
	case INITIATE_LOGIN:
		return { ...state, isLoggingin: true };

	case LOGIN_SUCCESS:
		return {
			...state, isAuthenticated: true, isLoading: false, authenticatedUser: payload
		};

	case LOGIN_ERROR:
		return { ...state, isAuthenticated: false, loginError: payload };

	case USER_REAUTH:
		return { ...state, isAuthenticating: true };

	case USER_REAUTH_ERROR:
		return { ...state, isAuthenticated: false, loginError: payload };

	case USER_REAUTH_SUCCESS:
		return {
			...state,
			isAuthenticated: true,
			isAuthenticating: false,
			isLoading: false,
			authenticatedUser: payload
		};

	case INITIATE_LOGOUT:
		return { ...state, isLoggingout: true };

	case LOGOUT_SUCCESS:
		return {
			...state,
			authenticatedUser: {},
			isAuthenticated: false,
			isLoggingout: false,
			isLoggedout: true,
			loginSuccess: {}
		};

	case LOGOUT_ERROR:
		return {
			...state,
			isLoggingout: false,
			isLoggedout: false,
			logOutError: payload
		};
	case INITIATE_SIGNUP:
		return { ...state, isLoading: true };

	case SIGNUP_SUCCESS:
		return {
			...state,
			authenticatedUser: {},
			// isAuthenticated: false,
			isLoading: false,
			signupsuccess: true,
		};

	case LOGOUT_ERROR:
		return {
			...state,
			isLoading: false,
			signuperror: payload
		};

	default:
		return state;
	}

};