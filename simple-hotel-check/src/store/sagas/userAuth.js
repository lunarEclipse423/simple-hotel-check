const USER = {
  email: "example@gmail.com",
  password: "qwerty999",
};

const userAuth = async (values) => {
  return new Promise((resolve) =>
    setTimeout(async () => {
      let loggedIn = false;
      if (values.email === USER.email && values.password === USER.password) {
        loggedIn = true;
      }
      resolve(loggedIn);
    }, 1000)
  );
};

export default userAuth;
