const students = ["Matt", "Mark", "Josephine", "Thomas"];
//get 1 element
//console.log(students[1]);
//students.forEach((student) => console.log(student));
const movie = {
  title: "Star Wars",
  release: 1977,
  actors: ["Mark", "Harrison", "Carrie"],
};
//forEach
movies.forEach((movie) => console.log(movie.title));
//filter, to get a new array of movies that match criteria
//array name DOT Array CommanTd then arrow function that accepts singular element of array
const newMovies = movies.filter((movie) => movie.release > 1990);
console.log(newMovies);
movies.filter((movie) => movie.release > 1990);
