class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        // First compare the length of the string
        // iterate through each string and add string value as key and number of character as value and with second string we can compare
        // Do we need two objects then
        // Can it be done with just one object
        const firstHashmap = new Map();
        const secondHashmap = new Map();

        if (s.length !== t.length) {
            return false;
        }
        for (let i = 0; i < s.length; i++) {
            firstHashmap.set(
                s[i],
                firstHashmap.has(s[i]) ? firstHashmap.get(s[i]) + 1 : 1,
            );
        }
        //   Now I need to compare if the second array also have the same number of character

        //

        for (let i = 0; i < t.length; i++) {
            secondHashmap.set(
                t[i],
                secondHashmap.has(t[i]) ? secondHashmap.get(t[i]) + 1 : 1,
            );
        }

        for (let [key, value] of secondHashmap) {
            if (firstHashmap.get(key) !== value) {
                return false;
            }
        }

        return true;
    }
}
