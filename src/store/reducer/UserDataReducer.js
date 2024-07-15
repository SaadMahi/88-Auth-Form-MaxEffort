import { USER_DATA } from "../actions/actionTypes";

const UserDataReducer = (state, action) => {
  switch (action.type) {
    case USER_DATA: {
      return {
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default UserDataReducer;
