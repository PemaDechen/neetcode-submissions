class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const obj = {};
        for (let i = 0; i < nums.length; i++) {
            const difference = target - nums[i];
            if (obj.hasOwnProperty(difference)) {
                return [obj[difference], i];
            }

            obj[nums[i]] = i;
        }
        return [];
    }
}
