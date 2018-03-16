Array.prototype.bubbleSort = function () {
  let array = this;
  let sorted = true;

  do {
    sorted = false;
    for(let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i+1]) {
        [this[i], this[i + 1]] = [this[i + 1], this[i]];
        sorted = true;
      }
    }
  } while(sorted);
  return array;
};

String.prototype.substrings = function () {
  let subs = [];
  for(let i = 0; i < this.length; i++) {
    for(let j = i; j < this.length; j++) {
      let sub = this.substring(i, j+1);
      if (!subs.includes(sub)) {
        subs.push(sub);
      }
    }
  }
  return subs;
};
