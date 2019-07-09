function firstFunc(multiple) {
  const myArr = [];
  for(let i = 1; i * multiple <= 100; i++) {
    myArr.push(i * multiple);
    
  }
  return myArr;
}

module.exports = {
  firstFunc
};
