const numberOfFilms = prompt('Сколько фильмов вы уже просмотрели?', '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};
const pastMovie = prompt('Один из последних просмотренных фильмов?', '');

const rating = prompt('На сколько оцениваете его?', '');

personalMovieDB.movies[pastMovie] = rating;

console.log(personalMovieDB);
 