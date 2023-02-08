import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authUser } from "../../store/actions/user";
import validateLoginInput from "../../utils/validateLoginInput";
import "./Login.scss";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const startValues = {
    email: "",
    password: "",
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(startValues);

  const loginUser = async (e) => {
    e.preventDefault();
    let validationErrors = validateLoginInput({ email, password });
    for (let key in validationErrors) {
      if (validationErrors[key] !== "") {
        setErrors(validationErrors);
        return;
      }
    }
    dispatch(authUser({ email, password }, navigate, setErrors));
  };

  return (
    <div className="login-wrapper">
      <div className="layout">
        <div className="login-window">
          <h3 className="login__title">Simple Hotel Check</h3>
          <form onSubmit={loginUser}>
            <div className="input-wrapper">
              <label
                className={`input-label${
                  errors.email === "" ? "" : " input-label_error"
                }`}
              >
                Логин
              </label>
              <input
                className={`input${
                  errors.email === "" ? "" : " input_error"
                } input__email`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
              />
              <span className="error">{errors.email === "" ? "" : errors.email}</span>
            </div>
            <div className="input-wrapper">
              <label
                className={`input-label${
                  errors.password === "" ? "" : " input-label_error"
                }`}
              >
                Пароль
              </label>
              <input
                className={`input${
                  errors.password === "" ? "" : " input_error"
                } input__password`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
              />
              <span className="error">
                {errors.password === "" ? "" : errors.password}
              </span>
            </div>
            <input className="button" type="submit" value="Войти" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
