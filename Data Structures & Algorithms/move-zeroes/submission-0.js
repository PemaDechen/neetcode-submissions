class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(arr) {
        let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] === 0) {
      if (arr[j] === 0) {
        continue;
      } else {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i += 1;
      }
    }else{
        i+=1;
    }
  }
  return arr;}
}
