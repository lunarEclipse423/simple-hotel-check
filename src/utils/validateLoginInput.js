import {
  EMPTY_FIELD_ERROR,
  INVALID_EMAIL_FORMAT_ERROR,
  INVALID_LANG_PASSWORD_ERROR,
  SHORT_PASSWORD_ERROR,
} from "../errors/errors";

const validateLoginInput = (values) => {
  const errors = validateEmptyFields(values);
  if (Object.keys(errors).length !== 0) {
    return errors;
  }
  errors.email = validateEmail(values.email);
  errors.password = validatePassword(values.password);
  return errors;
};

const validateEmptyFields = (values) => {
  const errors = {};
  for (let key in values) {
    if (!values[key]) {
      errors[key] = EMPTY_FIELD_ERROR;
    }
  }
  return errors;
};

const validateEmail = (email) => {
  const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!email.match(mailFormat)) {
    return INVALID_EMAIL_FORMAT_ERROR;
  }
  return "";
};

const validatePassword = (password) => {
  const passwordFormat = /^[^а-яА-ЯёЁ]+$/iu;
  const minPasswordLength = 8;
  if (!password.match(passwordFormat)) {
    return INVALID_LANG_PASSWORD_ERROR;
  }
  if (password.length < minPasswordLength) {
    return SHORT_PASSWORD_ERROR;
  }
  return "";
};

export default validateLoginInput;
