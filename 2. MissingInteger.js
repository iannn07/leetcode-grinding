/**
 *
 * @param {number[]} A
 * @returns {number}
 */
function solution(A) {
  const positiveIntegers = new Set(A.filter((index) => index > 0))
  let result = 1

  while (positiveIntegers.has(result)) result++

  return result
}

console.log(solution([1, 2, 3]))
