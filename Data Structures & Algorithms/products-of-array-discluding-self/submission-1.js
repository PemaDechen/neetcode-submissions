class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let number = 1;
        let left = [];
        for (let i = 0; i < nums.length; i++) {
            left.push(number);
            number = number * nums[i];
        }

        number = 1; 

        let right = [];
        for (let i = nums.length - 1; i >= 0; i--) {
            right[i] = number;
            number = number * nums[i];
        }

        let result = [];
        for (let i = 0; i < nums.length; i++) {
            result[i] = left[i] * right[i];
        }

        return result;

    }
}
