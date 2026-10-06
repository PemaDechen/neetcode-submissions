class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        function isAlphabet(a) {
            return (
                (a >= "a" && a <= "z") || (a >= "0" && a <= "9") || (a >= "A" && a <= "Z")
            );
        }

        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            if (!isAlphabet(s[left])) {
                left += 1;
                continue;
            }

            if (!isAlphabet(s[right])) {
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
