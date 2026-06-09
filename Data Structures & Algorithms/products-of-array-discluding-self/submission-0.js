class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = [];
        for (let i = 0; i < nums.length; i++) {
            let newData = 1;
            for (let j = 0; j < nums.length; j++) {
                if (i !== j) {
                    newData = newData * nums[j];
                }
            }
            result.push(newData);

        }

        return result;
    }
}
