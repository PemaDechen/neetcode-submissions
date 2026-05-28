class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const firstString = s.split('');
        const secondString = t.split('');

        if (firstString.length == secondString.length) {
            for (let i = 0; i < firstString.length; i++) {
                let stringMatched = false;
                for (let j = 0; j < secondString.length; j++) {
                    if (firstString[i] == secondString[j]) {
                        firstString.splice(i, 1)
                        secondString.splice(j, 1);
                        stringMatched = true;
                        i--;
                        j--;
                        break;
                    }
                }
                if (!stringMatched) {
                    return false;
                }
            }
            return true;
        }
        return false;


    }
}
