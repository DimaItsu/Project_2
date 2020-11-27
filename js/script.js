const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
let i=0;
do {
    const a = prompt('Один из последних просмотренных фильмов?', ''),
          b = prompt('На сколько оцениет его?', '');
          i++;
          if (a != null && b!= null && a !='' && b!= '' && a.length <50) {
            personalMovieDB.movies[a] =  b;
            console.log("done"); 
          } else {
              console.log('error');
              i--;
          }    
}
while(i<2);  

if (personalMovieDB.count<10) {
    console.log('Просмотренно довольно мало фильмов');
}   else if(personalMovieDB.count>=10 && personalMovieDB.count<30) {
        console.log('Вы классический зритель');
}   else if (personalMovieDB.count>30) {
     console.log('Вы киноман');
}
    else {
       console.log('Произошла ошибка'); 
}


    
console.log(personalMovieDB);