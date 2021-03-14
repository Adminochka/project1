let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', ''); 

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?', ''); 
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
};

// let a = prompt('Один из последних просмотренных фильмов?', ''),
//     b = prompt('На сколько оцениваете его?', ''),
//     c = prompt('Один из последних просмотренных фильмов?', ''),
//     d = prompt('На сколько оцениваете его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

function remeberMyFilms(){
    for (let i = 0; i < 2; i++){
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцениваете его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// remeberMyFilms();

function detectPersonslLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотренно довольно много фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман');
    } else {
        console.log('Произошла ошибка');
    }
}

// detectPersonslLevel();

function showMyDB(hidden){
    if (hidden === false){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres(){
    for (let i = 0; i < 3; i++){
        const c = prompt(`Ваш любимый жанр под номером ${i+1}`, ''); 
        personalMovieDB.genres[i] = c;
    }
}

writeYourGenres();

// console.log(personalMovieDB);
 
