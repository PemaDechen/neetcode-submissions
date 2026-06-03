class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const obj = {};
        for (let ele of nums) {
            obj[ele] = obj[ele] ? obj[ele] + 1 : 1;
        }

        const sortedKeys = Object.entries(obj)
            .sort((a, b) => b[1] - a[1]) // sort by value descending
            .map(([key]) => key); // extract only the keys

        console.log(sortedKeys); // [ 'e', 'c', 'a', 'b', 'd' ]
        let result = [];
        for (let i = 0; i < k; i++) {
            result.push(+sortedKeys[i]);
        }
        return result;
    }
}
