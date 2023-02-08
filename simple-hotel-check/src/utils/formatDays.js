const formatDays = (days) => {
  const words = ["день", "дня", "дней"];
  const cases = [2, 0, 1, 1, 1, 2];
  if (days % 100 > 4 && days % 100 < 20) {
    return words[2];
  } else if (days % 10 < 5) {
    return words[cases[days % 10]];
  } else {
    return words[cases[5]];
  }
};

export default formatDays;
