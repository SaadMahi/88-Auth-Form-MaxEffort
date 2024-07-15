import { LOGIN_USER, LOGOUT_USER } from "../actions/actionTypes";

const AuthReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_USER: {
      return {
        currentUser: action.payload,
      };
    }
    case LOGOUT_USER: {
      return {
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default AuthReducer;
