class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let number = 1;
        let result = [];

        for (let i = 0; i < nums.length; i++) {
            result.push(number);
            number = number * nums[i];  
        }

        let post = 1;
        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= post;      
            post *= nums[i];       
        }

        return result;

    }
}
