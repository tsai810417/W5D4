function range (start, end) {
  if (start > end) {
    return null;
  }
  let results = [start];

  if (start === end) {
    return results;
  }

  return results.concat(range(start + 1, end));
}

function sumRec (arr) {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumRec(arr.slice(1));
}

function exponent1 (base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * exponent1(base, exp - 1);
}

function exponent2 (base, exp) {
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    return Math.pow(exponent2(base, exp / 2), 2);
  } else {
    return base * Math.pow(exponent2(base, (exp - 1) / 2), 2);
  }
}

function fibonacci (n) {
  if (n === 0) {
    return [];
  }
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }

  let prevFib = fibonacci(n-1);
  return prevFib.concat([prevFib[prevFib.length - 2] + prevFib[prevFib.length - 1]]);
}

function deepDup (arr) {
  let dupedArray = [];

  arr.myEach(element => {
    if (Array.isArray(element)) {
      dupedArray.push(deepDup(element));
    } else {
      dupedArray.push(element);
    }
  });

  return dupedArray;
}

function bsearch (arr, target) {
  let mid = arr.length / 2;

  if (arr[mid] === target) {
    return mid;
  }else if (arr[mid] < target) {
    return bsearch(arr.slice(0,mid));
  }else if (arr[mid] > target) {
    let searchResult = bsearch(arr.slice(mid + 1), target);
    return mid + searchResult;
  }

  return -1;

}
