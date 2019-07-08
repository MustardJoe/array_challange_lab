const { firstFunc } = require('../files/multipleOfN');

describe('multiples of n', () => {
  it('returns an array', () => {

    const myArr = firstFunc(10);
    console.log(myArr);
    expect(myArr).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });
});
