module.exports = function longestConsecutiveLength(array) {
  const nd = array.length;
  const hashMap = new Map();
  let result = 0;

  for (let i = 0; i < nd; i++) {
    hashMap.set(array[i], null);
  }

  for (let [key, value] of hashMap) {
    if (!hashMap.has(key - 1)) {
      let t = 1;
      let j = key + 1;

      while (hashMap.has(j++)) t++;

      if (t > 1 && t > result) {
        result = t;
      }
    }
  }
  
  return result;
}
