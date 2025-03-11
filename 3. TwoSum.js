/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let result = new Map()
  for (let i = 0; i < nums.length; i++) {
    let exception = target - nums[i]
    if (result.has(exception)) return [result.get(exception), i]
    result.set(nums[i], i)
  }

  return result
}

console.log(twoSum([2, 7, 11, 15], 9))
