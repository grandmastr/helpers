const generateRandomNumbers = (length: number) => {
  if (typeof length !== 'number' || length < 0) {
    throw new Error('Invalid length. Length should be a non-negative number.');
  }

  let result = '';
  let characters = '0123456789';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export default generateRandomNumbers;
