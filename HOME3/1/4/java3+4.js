// #reLkOkTB29Q
//
// створити масив книжок (назва, кількість сторінок, автори , жанри).
//
// – знайти найбільшу книжку.
//
// – знайти книжку/ки з найбільшою кількістю жанрів
//
// – знайти книжку/ки з найдовшою назвою
//
// – знайти книжку/ки, які писали 2 автори
//
// – знайти книжку/ки, які писав 1 автор

let books =[ {
    title: `Hamlet`, pageCount: 790, genre: [`Tragedy`,`Detective`],
    authors: [{name: `Shekspeer`, age: 45},{name:`Viliam`,age:23}]
},
{
    title: `Sherlok`, pageCount: 820, genre: [`Detective`],
    authors: [{name: `Mari`, age: 33},{name:`Q`,age:48}]
},
 {
    title: `Hero`, pageCount: 210, genre: [`Fantasy`],
    authors: [{name: `Marvel`, age: 28},{name:`Antonio`,age:32},{name:`Dgo`,age:56}]
}]
let biggest=books[0];  //не розумію цю умову
for(let i=0; i<books.length;i++){
    if(books[i].pageCount>biggest.pageCount){
        biggest=books[i].pageCount;
    }
}
console.log(biggest)
 let mostGenres=books[0];
for(let i=0; i<books.length>mostGenres.genre.length;i++){
    mostGenres=books[i];
}
console.log(mostGenres.title);

let longestTitle=books[0];
for(let i=0; i<books.length;i++){
    if(books[i].title.length>longestTitle.title.length){
        longestTitle=books[i];
    }
}
console.log(longestTitle.title);

for(let i=0; i<books.length;i++){
    if(books[i].authors.length ===2){
        console.log(books[i]);
    }
}
 for(let i=0; i<books.length;i++){
     if(books[i].authors.length ===3){
         console.log(books[i]);
     }
 }
console.log(`Сповідаюсь: це завдання робила з чатом GPT`);
