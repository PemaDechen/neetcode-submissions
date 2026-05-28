class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let hashMap = {};

        nums.map((data)=> hashMap[data]=hashMap[data] ? hashMap[data]+1:1);

        for(const key in hashMap){
            if(hashMap[key] >1){
                return true;
            }
        }

        return false
    }
}
