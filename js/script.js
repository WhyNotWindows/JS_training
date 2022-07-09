const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

/* const movieName1 = prompt('Один из последних просмотренных фильмов?', '');
const movieRate1 = prompt('На сколько бы вы его оценили?', '');
const movieName2 = prompt('Один из последних просмотренных фильмов?', '');
const movieRate2 = prompt('На сколько бы вы его оценили?', '');

personalMovieDB.movies[movieName1] = movieRate1;
personalMovieDB.movies[movieName2] = movieRate2; */

for (let i = 0; i < 2; i++) {
    let movieName = prompt('Один из последних просмотренных фильмов?', '');
    if (!movieName || movieName.length > 50) {
        i -= 1;
        continue;
    }
    let movieRate = prompt('На сколько бы вы его оценили?', '');
    if (!movieRate) {
        i -= 1;
        continue;
    }
    personalMovieDB.movies[movieName] = movieRate;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMovieDB);