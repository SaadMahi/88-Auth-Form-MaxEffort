const UserDataReducer = (state, action) => {
  switch (action.type) {
    case "data": {
      return {
        userData: action.payload,
      };
    }

    default:
      return state;
  }
};

export default UserDataReducer;
