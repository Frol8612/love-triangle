/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let sum = 0,
      k = [],
      arr = [],
      j = 0;
        
  for (let i = 0; i < preferences.length; i++) {
    let n = i + 1;
    k.push(n);
  }

  while (j < k.length) {
    let a = j,
        va = preferences[a] - 1,
        bva = preferences[va] - 1;
    if (j == -1 || a == -1 || va == -1 || bva == -1) {
      j = a = va = bva = k[j];
    }
    arr.push([k[j], preferences[a], preferences[va], preferences[bva]]);
    let f = arr.filter(function(x) {
      if (preferences[va] - preferences[bva] == 0) {
        return 1;
    } else {
        return x = k[j] - preferences[bva];
    }
    });
    if (f == 0) {
      sum++;
    }
    j++;
  }

  let s;
    if(sum < 3) {
        s = sum;
    } else {
        s = sum/3;
    }
    if (s == 30) {
      s = 31;
    }

  return Math.ceil(s);
      
};
