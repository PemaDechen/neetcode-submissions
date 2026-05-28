class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const obj ={};
        for(let i of nums){
            if(obj[i]){
                return true
            }
            obj[i] = true;
        }

        return false;

    }
}
