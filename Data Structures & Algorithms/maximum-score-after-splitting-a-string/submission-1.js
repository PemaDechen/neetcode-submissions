class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxScore(s) {
        // first I need to seperate the string into array;

        // findPrefixSum for Zeroes
        let pfZ = [];
        let pfOnes = [];
        pfZ[0] = s[0] === '0' ? 1 : 0;
        pfOnes[0] = s[0] === '1' ? 1 : 0;
        for (let i = 1; i < s.length; i++) {
            if (s[i] === '0') {
                pfZ[i] = pfZ[i - 1] + 1;
            } else {
                pfZ[i] = pfZ[i - 1];
            }

        }
        for (let i = 1; i < s.length; i++) {
            if (s[i] === '1') {
                pfOnes[i] = pfOnes[i - 1] + 1;
            } else {
                pfOnes[i] = pfOnes[i - 1];
            }

        }

        let maxScoreAfterSplit = -Infinity;
        for (let i = 0; i < s.length-1; i++) {
            let left = pfZ[i];
            let right = pfOnes[s.length - 1] - pfOnes[i];

            if (maxScoreAfterSplit < left + right) {
                maxScoreAfterSplit = left + right;
            }

        }

        return maxScoreAfterSplit;

    }
}
