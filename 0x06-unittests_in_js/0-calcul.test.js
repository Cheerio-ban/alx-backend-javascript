const assert = require('assert');
const { describe, it } = require('mocha');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('checking if numbers round', () => {
    const res = calculateNumber(1, 5);
    assert.strictEqual(res, 6);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(1.4, 3.3);
    assert.strictEqual(res, 4);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(1.6, 4.8);
    assert.strictEqual(res, 7);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(0, 0);
    assert.strictEqual(res, 0);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(-1.6, -2.7);
    assert.strictEqual(res, -5);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(-1.4, -2.2);
    assert.strictEqual(res, -3);
  });
  it('checking if numbers round', () => {
    const res = calculateNumber(0.1, 0.2);
    assert.strictEqual(res, 0);
  });
});
