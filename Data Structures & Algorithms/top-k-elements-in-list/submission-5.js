class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();
        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1)
        }
        const newArray = [...map];
        newArray.sort((x,y)=>y[1]-x[1]);

        return newArray.slice(0,k).map(data=>data[0]);


    }
}
