class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let result = "";
        for (let i = 0; i < strs.length; i++) {
            result = (result + strs[i].length + "#$%" + strs[i]);
        }
        return result;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#" || str.slice(j, j + 3) !== "#$%") j++;

            const len = +str.slice(i, j);
            const word = str.slice(j + 3, j + 3 + len);
            result.push(word);
            i = j + 3 + len;
        }

        return result;
    }
}
