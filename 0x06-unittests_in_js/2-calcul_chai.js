const calculateNumber = (type, a, b) => {
  const newA = Math.round(a);
  const newB = Math.round(b);
  if (type === 'SUM') {
    return newB + newA;
  } if (type === 'SUBTRACT') {
    return newA - newB;
  } if (type === 'DIVIDE') {
    if (newB === 0) {
      return 'Error';
    }
    return newA / newB;
  }
  return 0;
};

module.exports = calculateNumber;
