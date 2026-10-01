class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length!==t.length) return false
        // First I think I should sort the string and then I should compare the each string 
        const str1 = s.split('').sort().join('');
        const str2 = t.split('').sort().join('');

        for (let i = 0; i < str1.length; i++) {
            if (str1[i] !== str2[i]) {
                return false
            }

        }
        return true


    }
}
