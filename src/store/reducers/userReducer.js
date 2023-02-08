import { userActionTypes } from "../actions/user";

const initState = {
  loggedIn: false,
};

const userReducer = (state = initState, action) => {
  switch (action.type) {
    case userActionTypes.LOG_IN_USER:
      return { ...state, loggedIn: true };
    case userActionTypes.LOG_OUT_USER:
      return { ...state, loggedIn: false };
    default:
      return state;
  }
};

export default userReducer;
