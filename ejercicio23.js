const movies = [
  { name: 'Titan A.E.', durationInMinutes: 130 },
  { name: 'Nightmare before Christmas', durationInMinutes: 225 },
  { name: 'Inception', durationInMinutes: 165 },
  { name: 'The Lord of the Rings', durationInMinutes: 967 },
  { name: 'Star Wars: A New Hope', durationInMinutes: 214 },
  { name: 'Terminator', durationInMinutes: 140 }
]

const shortMovies = []
const mediumMovies = []
const longMovies = []

for (const movie of movies) {
  if (movie.durationInMinutes <= 100) {
    shortMovies.push(movie)
  } else if (movie.durationInMinutes > 100 && movie.durationInMinutes < 200) {
    mediumMovies.push(movie)
  } else if (movie.durationInMinutes >= 200) {
    longMovies.push(movie)
  }
}

console.log('Short movies:', shortMovies)
console.log('Medium movies:', mediumMovies)
console.log('Long movies:', longMovies)
