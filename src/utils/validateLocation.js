import { EMPTY_FIELD_ERROR } from "../errors/errors";

const validateLocation = (location) => {
  const error = { location: "" };
  if (!location) {
    error.location = EMPTY_FIELD_ERROR;
    return error;
  }
  return error;
};

export default validateLocation;
