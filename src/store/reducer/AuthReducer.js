import {
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from "../actions/actionTypes";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER_SUCCESS: {
      return {
        currentUser: action.payload,
      };
    }
    case LOGOUT_USER_SUCCESS: {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
