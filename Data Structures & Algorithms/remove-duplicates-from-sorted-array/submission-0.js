class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(arr) {
        if (arr.length === 0) return 0;
        let left = 0;
        let right = 1;
        while (right < arr.length) {
            if (arr[left] === arr[right]) {
                right += 1;
            } else {
                left += 1;
                arr[left] = arr[right];
                right += 1;
            }
        }
        return left + 1;
    }
}
