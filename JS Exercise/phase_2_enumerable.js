Array.prototype.myEach = function (callback) {
  for(let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function (callback) {
  let newArray = [];
  this.myEach((element) => newArray.push(callback(element)));
  return newArray;
};

Array.prototype.myReduce = function (callback, initialValue) {
  let acc = initialValue || 0;
  this.myEach((element) => (acc = callback(acc, element)));
  return acc;
};
