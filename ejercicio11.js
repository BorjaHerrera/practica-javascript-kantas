const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub']

function averageWord(param) {
  let sum = 0

  for (let i = 0; i < param.length; i++) {
    const element = param[i]

    if (typeof element === 'number') {
      sum += element
    } else {
      if (typeof element === 'string') sum += element.length
    }
  }
  return sum / param.length
}

console.log(averageWord(mixedElements))
