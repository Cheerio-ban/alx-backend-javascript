const calculateNumber = (a, b) => {
  const newA = Math.round(a);
  const newB = Math.round(b);
  return newA + newB;
};

module.exports = calculateNumber;
