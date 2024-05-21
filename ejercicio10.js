const numbers = [12, 21, 38, 5, 45, 37, 6]

function average(param) {
  let sum = 0
  for (let i = 0; i < param.length; i++) {
    const number = param[i]
    sum += number
  }
  return sum / param.length
}

console.log(average(numbers))
