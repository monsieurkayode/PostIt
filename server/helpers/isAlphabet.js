const isAlphabet = (str) => {
  const exp = /^[A-Za-z]+$/;
  if (str.match(exp)) {
    return true;
  }
  return false;
};

export default isAlphabet;
