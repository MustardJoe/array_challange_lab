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

module.exports = {
  uniqueValFunc
};
