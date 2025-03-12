/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  const convertedX = x.toString()
  const reversed = x.toString().split('').reverse().join('')

  if (convertedX === reversed) return true

  return false
}

console.log(isPalindrome(121))
