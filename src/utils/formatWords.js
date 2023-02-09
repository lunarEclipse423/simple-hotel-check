const formatWords = (number, words) => {
  const cases = [2, 0, 1, 1, 1, 2];
  if (number % 100 > 4 && number % 100 < 20) {
    return words[2];
  } else if (number % 10 < 5) {
    return words[cases[number % 10]];
  } else {
    return words[cases[5]];
  }
};

export default formatWords;
