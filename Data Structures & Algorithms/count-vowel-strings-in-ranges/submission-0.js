class Solution {
    /**
     * @param {string[]} words
     * @param {number[][]} queries
     * @return {number[]}
     */


    vowelStrings(words, queries) {
        const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

        // Step 1 — build prefix array ONCE for entire words array
        const pfVowels = [];
        for (let i = 0; i < words.length; i++) {
            const first = words[i][0];
            const last = words[i][words[i].length - 1]; // fix — last character
            const isVowelString = vowels.has(first) && vowels.has(last);

            if (i === 0) {
                pfVowels[i] = isVowelString ? 1 : 0;
            } else {
                pfVowels[i] = pfVowels[i - 1] + (isVowelString ? 1 : 0);
            }
        }

        // Step 2 — answer each query in O(1)
        const res = [];
        for (const [left, right] of queries) {
            if (left === 0) {
                res.push(pfVowels[right]);
            } else {
                res.push(pfVowels[right] - pfVowels[left - 1]);
            }
        }

        return res;
    }

}
