const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const movieName1 = prompt('Один из последних просмотренных фильмов?', '');
const movieRate1 = prompt('На сколько бы вы его оценили?', '');
const movieName2 = prompt('Один из последних просмотренных фильмов?', '');
const movieRate2 = prompt('На сколько бы вы его оценили?', '');

personalMovieDB.movies[movieName1] = movieRate1;
personalMovieDB.movies[movieName2] = movieRate2;

console.log(personalMovieDB);