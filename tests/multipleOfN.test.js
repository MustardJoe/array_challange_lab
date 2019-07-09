const { firstFunc } = require('../files/multipleOfN');

describe('multiples of n', () => {
  it('returns an array of n 10', () => {

    const myArr = firstFunc(10);
    console.log(myArr);
    expect(myArr).toEqual([10, 20, 30, 40, 50, 60, 70, 80, 90, 100]);
  });

  it('returns array of n 25', () => {
    const myArr = firstFunc(25);
    expect(myArr).toEqual([25, 50, 75, 100]);
  });
});
