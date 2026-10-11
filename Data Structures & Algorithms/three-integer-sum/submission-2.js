class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(arr) {
        let finalResult = [];
        arr.sort((a, b) => a - b);
        for (let i = 0; i < arr.length; i++) {
            if (i > 0 && arr[i] == arr[i - 1]) {
                continue;
            }
            let left = i + 1;
            let right = arr.length - 1;
            const target = -arr[i];
            while (left < right && left !== right && left != i && right !== i) {
                const sum = arr[left] + arr[right];
                if (sum === target) {
                    finalResult.push([arr[left], arr[right], arr[i]]);
                    left += 1;
                    right -= 1;
                    while (left < right && arr[left] === arr[left - 1]) {
                        left += 1;
                    }
                } else if (target < sum) {
                    right -= 1;
                } else {
                    left += 1;
                }
            }
        }

        return finalResult;
    }
}
