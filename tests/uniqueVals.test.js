const { uniqueValFunc } = require('../files/uniqueVals');

describe('test for unique values array func', () => {
  it('makes sure we only have 1 of each value in our array', () => {
    const arrNotUnq = [1, 2, 3, 2, 4];

    function uniqueValFunc(arr) {
      // const arr2 = [];
      // for(let i = 0; i < arr.length; i++) {
      //   if(!arr2.arr[i]) {
      //     arr2.push(arr[i]);
      //   }
        
      // }
      // return arr2;
      const uniqueItems = [...new Set(arr)];
      // console.log(uniqueItems);
      return uniqueItems;
    }

    const result = uniqueValFunc(arrNotUnq);

    expect(result).toEqaul([1, 2, 3, 4 ]);
  });
});
