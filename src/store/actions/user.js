export const userActionTypes = {
  AUTH_USER: "AUTH_USER",
  LOG_IN_USER: "LOG_IN_USER",
  LOG_OUT_USER: "LOG_OUT_USER",
};

export const authUser = (authData, navigate, setErrors) => {
  return {
    type: userActionTypes.AUTH_USER,
    authData,
    navigate,
    setErrors,
  };
};

export const logInUser = () => {
  return {
    type: userActionTypes.LOG_IN_USER,
  };
};

export const logOutUser = () => {
  return {
    type: userActionTypes.LOG_OUT_USER,
  };
};
