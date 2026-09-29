class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const anagramList = new Map();

        for (let i = 0; i < strs.length; i++) {
            const sortedWord = [...strs[i]].sort().join("");
            if (anagramList.has(sortedWord)) {
                anagramList.set(sortedWord, [...anagramList.get(sortedWord), strs[i]]);
            } else {
                anagramList.set(sortedWord, [strs[i]]);
            }
        }

        return [...anagramList.values()];
    }
}
