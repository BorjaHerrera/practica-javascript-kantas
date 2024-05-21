const users = [
  { name: 'Tony', years: 43 },
  { name: 'Peter', years: 18 },
  { name: 'Natasha', years: 14 },
  { name: 'Bruce', years: 32 },
  { name: 'Khamala', years: 16 }
]

const under18 = []
const over18 = []

for (const user of users) {
  if (user.years < 18) {
    under18.push(user)
  }
  if (user.years >= 18) {
    over18.push(user)
  }
}
console.log('Usuarios menores de edad:', under18)
console.log('Usuarios mayores de edad:', over18)
