class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const obj = {};
        for (let i = 0; i < strs.length; i++) {
            const sortedString = strs[i].split("").sort().join("");
            if (!obj.hasOwnProperty(sortedString)) {
                obj[sortedString] = [strs[i]];
            } else {
                obj[sortedString].push(strs[i]);
            }
        }

        return Object.values(obj);
    }
}
