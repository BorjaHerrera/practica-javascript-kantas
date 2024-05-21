const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
]

function finderName(array, string) {
  for (let i = 0; i < array.length; i++) {
    const name = array[i]
    if (name === string) {
      return { exists: true, position: i }
    }
  }
  return false
}

console.log(finderName(nameFinder, 'Clint'))
console.log(finderName(nameFinder, 'Paqui'))
