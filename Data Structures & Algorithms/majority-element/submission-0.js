class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(arr) {
        const map = new Map();
        for (let i = 0; i < arr.length; i++) {
            map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
        }

        //    finding key with max value.

        let bestCount = -Infinity;
        let bestNumber = -Infinity;
        for (const [key, value] of map) {
            if (bestCount < value) {
                bestCount = value;
                bestNumber = key;
            }
        }
        if (bestCount > arr.length / 2) {
            return bestNumber;
        }
        return -1;
    }
}
