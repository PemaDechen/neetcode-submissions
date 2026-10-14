class Solution {
    /**
     * @param {string} ransomNote
     * @param {string} magazine
     * @return {boolean}
     */
    canConstruct(ransomNote, magazine) {
        const ransomNoteMap = new Map();
        for (let i = 0; i < ransomNote.length; i++) {
            ransomNoteMap.set(
                ransomNote[i],
                (ransomNoteMap.get(ransomNote[i]) ?? 0) + 1,
            ); // till hold doubt on ?? and null coleascing.
        }

        for (let i = 0; i < magazine.length; i++) {
            if (ransomNoteMap.has(magazine[i])) {
                ransomNoteMap.set(magazine[i], ransomNoteMap.get(magazine[i]) - 1);
            }
        }


        for (const [key, count] of ransomNoteMap) {
            if (count > 0) return false; // use `count`, not ransomNoteMap[key]
        }
        return true;
    }
}
