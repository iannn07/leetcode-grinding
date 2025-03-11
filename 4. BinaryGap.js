/**
 *
 * @param {number} number
 */
function binaryGap(number) {
  let binary = number.toString(2)
  let binaryLen = binary.length

  const frequencyCounter = binary.split('').reduce((total, char) => {
    total[char] ? total[char]++ : (total[char] = 1)
    return total
  }, {})

  const keys = Object.keys(frequencyCounter)

  if (keys.length === 1 && keys[0] == 1) return 0

  if (
    keys.length > 1 &&
    (frequencyCounter[keys[0]] === 0 || frequencyCounter[keys[1]] === 1)
  )
    return 0

  let maxGap = new Number()
  let currentGap = new Number()

  for (let i = 0; i < binaryLen; i++) {
    if (binary[i] == 1) {
      if (currentGap > maxGap) maxGap = currentGap

      currentGap = 0
    } else if (binary[i] == 0) {
      currentGap++
    }
  }

  return maxGap
}

console.log(binaryGap(6))
