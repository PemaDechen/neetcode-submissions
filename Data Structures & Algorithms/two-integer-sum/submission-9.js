class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        const exist = new Map();

        for (let i = 0; i < nums.length; i++) {
            // check if the number exists
            if (exist.has(nums[i])) {
                return [exist.get(nums[i]), i];
            }
            const newNumberNeeded = target - nums[i];

            exist.set(newNumberNeeded, i);
        }

        return [];


    }
}
