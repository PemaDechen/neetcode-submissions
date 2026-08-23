class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        // first get the prefix array list 
        let pf = [];
        pf[0] = nums[0]
        for (let i = 1; i < nums.length; i++) {
            pf[i] = pf[i - 1] + nums[i];
        }

        //    Now we need to find the left and right side for the given index and find the pivot point 
        let left = 0;
        let right = 0;
        for (let i = 0; i < nums.length; i++) {
            if (i == 0) {
                left = 0;
                right = pf[nums.length - 1] - pf[i];
            } else {
                left = pf[i - 1];
                right = pf[nums.length - 1] - pf[i];

            }

            if(left === right){
                return i;
            }

        }
        return -1;

    }
}
