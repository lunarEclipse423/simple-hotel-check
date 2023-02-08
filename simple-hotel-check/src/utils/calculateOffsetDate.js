const calculateOffsetDate = (checkInDate, days) => {
  const currentDate = new Date(checkInDate);
  currentDate.setDate(currentDate.getDate() + days);
  var options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  };
  const result = currentDate
    .toLocaleDateString("ru-RU", options)
    .split(".")
    .reverse()
    .join("-");
  return result;
};

export default calculateOffsetDate;
