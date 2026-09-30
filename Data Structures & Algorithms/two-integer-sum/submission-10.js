class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for (let i = 0; i < nums.length; i++) {
            const neededNumber = target - nums[i];
            if (map.has(neededNumber)) {
                return [map.get(neededNumber), i];
            }
            map.set(nums[i], i);
        }
        return [];

    }
}
