class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(h) {
        let maxArea = 0;
        let left = 0;
        let right = h.length - 1;

        while (left < right) {
            const minHeight = Math.min(h[left], h[right]);
            const width = right - left;
            const area = minHeight * width;

            if (minHeight === h[left]) {
                left += 1;
            } else {
                right -= 1;
            }
            if (maxArea < area) {
                maxArea = area;
            }
        }

        return maxArea;
    }
}
