class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(num) {
            if (num.length == 0) return 0;

            const set = new Set(num);
            let length = 1;
            let maxLength = 1;

            for (const n of set) {
                let current;
                if (!set.has(n - 1)) {
                    current = n;
                    while (set.has(current + 1)) {
                        length += 1;
                        current += 1;
                    }

                    if (maxLength < length) {
                        maxLength = length;
                    }
                    length = 1;
                }
            }

            return maxLength;
        }
    }

