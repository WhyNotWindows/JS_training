'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    showMyDB: function(DB) {
        if (!DB.privat) {
            console.log(DB);
        } else {
            console.log('Извините, база данных недоступна.');
        }
    },
    toggleVisibleMyDB: function() {
        if (!personalMovieDB.privat) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр фильмов под номером ${i}`);
            if (!personalMovieDB.genres[i - 1]) {
                i -= 1;
                continue;
            }
        }
        personalMovieDB.genres.forEach(function(name, i){
            console.log(`Любимый жанр #${i+1} - это ${name}`);
        });
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            let movieName = prompt('Один из последних просмотренных фильмов?', '').trim();
            if (!movieName || movieName.length > 50) {
                i -= 1;
                continue;
            }
            let movieRate = +prompt('На сколько бы вы его оценили?', '');
            if (!movieRate) {
                i -= 1;
                continue;
            }
            personalMovieDB.movies[movieName] = movieRate;
        }
    },
    detectPersonalLevel: function() {
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
};

personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB);
personalMovieDB.writeYourGenres();

//console.log(personalMovieDB);