const numbers = [1, 2, 3, 5, 45, 37, 58]

function sumAll(param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    const number = param[i]
    sum += number
  }
  return sum
}

console.log(average(numbers))
