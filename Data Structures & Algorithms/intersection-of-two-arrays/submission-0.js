class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number[]}
     */
    intersection(arr1, arr2) {
        const set1 = new Set();
        const set2 = new Set();

        for (let i = 0; i < arr1.length; i++) {
            set1.add(arr1[i]);
        }

        for (let i = 0; i < arr2.length; i++) {
            if (set1.has(arr2[i])) {
                set2.add(arr2[i]);
            }
        }
        return [...set2];
    }

}
