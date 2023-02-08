const formatDate = (initialDate) => {
  const date = new Date(initialDate);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const stringDate = date.toLocaleString("ru-RU", options);
  return stringDate.slice(0, stringDate.lastIndexOf(" "));
};

export default formatDate;
