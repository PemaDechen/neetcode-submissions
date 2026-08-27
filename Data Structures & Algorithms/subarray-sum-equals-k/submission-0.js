class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        let arr = nums;
        let runningSum = 0;
        let count = 0;
        let map = { 0: 1 };
        for (let i = 0; i < arr.length; i++) {
            runningSum += arr[i];
            if (map[runningSum - k]) {
                count += map[runningSum - k];
            }
            map[runningSum] = (map[runningSum] || 0) + 1;
        }
        return count;
    }
}
