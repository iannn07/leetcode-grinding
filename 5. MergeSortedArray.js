/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void}
 */
var merge = function (nums1, m, nums2, n) {
  for (let i = m, j = 0; j < n; i++, j++) {
    nums1[i] = nums2[j]
  }
  return nums1.sort((a, b) => a - b)
}

console.log(merge([1, 2, 3, 4], 3, [1], 1))
