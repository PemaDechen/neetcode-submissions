class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const str1 = s;
        const str2 = t;
        if (str1.length !== str2.length) {
            return false;
        }

        const charCount = {};
        for (let char of str1) {
            charCount[char] = (charCount[char] | 0) + 1;
        }

        for (let char of str2) {
            if (!charCount[char]) {
                return false;
            }

            if (charCount[char]) {
                charCount[char]--;
            }
        }

        return true;


    }
}
