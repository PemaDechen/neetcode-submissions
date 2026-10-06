class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!/[a-zA-Z0-9]/.test(s[left])) {
                left += 1;
                continue;
            }

            if (!/[a-zA-Z0-9]/.test(s[right])) {
                right -= 1;
                continue;
            }
            if (s[left].toLowerCase() !== s[right].toLowerCase()) {
                return false;
            }
            left += 1;
            right -= 1;
        }
        return true;
    }
}
