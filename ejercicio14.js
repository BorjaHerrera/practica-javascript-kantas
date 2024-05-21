const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
]
function repeatCounter(param) {
  const count = {}

  for (let i = 0; i < param.length; i++) {
    const word = param[i]

    if (count[word] >= 1) {
      count[word]++
    } else {
      count[word] = 1
    }
  }
  console.log(count)
}

repeatCounter(counterWords)
