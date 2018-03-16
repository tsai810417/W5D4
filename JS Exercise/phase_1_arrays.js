Array.prototype.uniq = function () {
  let uniqueArray = [];

  for(let i = 0; i < this.length; i++) {
    if (!uniqueArray.includes(this[i])) {
      uniqueArray.push(this[i]);
    }
  }
  return uniqueArray;
};

Array.prototype.twoSum = function () {
  let sumPairs = [];

  for(let i = 0; i < this.length -1; i++) {
    for(let j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0)
      sumPairs.push([i, j]);
    }
  }
  return sumPairs;
};

Array.prototype.transpose = function () {
  let transposed = [];

  for(let i = 0; i < this.length; i++) {
    let current = [];
    for(let j = 0; j < this.length; j++) {
      current.push(this[j][i]);
    }
    transposed.push(current);
  }
  return transposed;
};
