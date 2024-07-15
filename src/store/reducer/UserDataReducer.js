import { SAVE_USER_DATA } from "../actions/actionTypes";

const UserDataReducer = (state, action) => {
  switch (action.type) {
    case SAVE_USER_DATA: {
      return {
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default UserDataReducer;
