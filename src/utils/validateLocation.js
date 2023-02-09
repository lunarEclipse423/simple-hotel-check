import { EMPTY_FIELD_ERROR, INVALID_LOCATION_FORMAT_ERROR } from "../errors/errors";

const validateLocation = (location) => {
  const error = { location: "" };
  if (!location) {
    error.location = EMPTY_FIELD_ERROR;
    return error;
  }
  const locationFormat = /^[а-яА-ЯёЁ]+$/iu;
  if (!location.match(locationFormat)) {
    error.location = INVALID_LOCATION_FORMAT_ERROR;
  }
  return error;
};

export default validateLocation;
