const avengers = [
  'Hulk',
  'Thor',
  'IronMan',
  'Captain A.',
  'Spiderman',
  'Captain M.'
]

function findLongestWord(param) {
  let longestWord = param[0]

  for (let i = 0; i < param.length; i++) {
    const word = param[i]
    if (word.length > longestWord.length) {
      longestWord = word
    }
  }
  return longestWord
}
console.log(findLongestWord(avengers))
