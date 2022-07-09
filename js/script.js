let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function showMyDB(DB) {
    if (!DB.privat) {
        console.log(DB);
    }
}

showMyDB(personalMovieDB);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильмов под номером ${i}`);
    }
}

writeYourGenres();

function rememberMyFilms() {
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
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

detectPersonalLevel();

console.log(personalMovieDB);