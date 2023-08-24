const utils = require('./utils');

const sendPaymentRequestToApi = (totalAmount, totalShipping) => {
  const added = utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: <result of the sum>The total is: ${added}`);
};

module.exports = sendPaymentRequestToApi;
