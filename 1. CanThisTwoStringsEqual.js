function compareTwoStrings(str1, str2) {
  const str1Length = str1.length

  let temp = new Array()

  for (let i = 0; i <= str1Length; i++) {
    const newStr = str1.slice(0, i) + str1.slice(i + 1)

    if (newStr === str2) temp.push(i)
  }

  if (temp.length < 1) return [-1]

  return temp
}

console.log(compareTwoStrings('aabbb', 'aabb'))
