// – Дано 2 масиви з рівною кількістю об’єктів.
//

// З’єднати в один об’єкт користувача та місто з відповідними “id” та “user_id” .
//
// Записати цей об’єкт в новий масив
let arrUsers=[];

let usersWithId = [

    {id: 1, name: `‘vasya’`, age: 31, status: false},

{id: 2, name: `‘petya’`, age: 30, status: true},

{id: 3, name: `‘kolya’`, age: 29, status: true},

{id: 4, name: `‘olya’`, age: 28, status: false}

];

let citiesWithId = [

    {user_id: 3, country: `‘USA’`, city: `‘Portland’`},

{user_id: 1, country: `‘Ukraine’`, city: `‘Ternopil’`},

{user_id: 2, country: `‘Poland’`, city: `‘Krakow’`},

{user_id: 4, country:` ‘USA’`, city: `‘Miami’`}

];

for (let user of usersWithId) {
    arrUsers.push(user);


    for (let citi of citiesWithId) {
        if (user.id === citi.user_id){
            user.address=citi;
        }

    }

}
console.log(arrUsers);
//10 чисел, вивести тільки парне


let arrTen=[154,12,456,81,45,475,444,1255,1,20]

for(let i=0; i<arrTen.length; i++){
    if(arrTen[i] % 2 === 0){
        console.log(arrTen[i]);
    }
}

//z odnoho v inshui


let arrEleven=[`start` ,154,12,456,81,45,475,444,1255,1,20,`finish`]
let arrNew=[]
for(let i=0; i<arrEleven.length; i++){
    arrNew.push(arrEleven[i]);

}
console.log(arrNew);


let arr=[`a`,`b`,`c`]
let arrWord=[]
for(let i=0; i<arr.length; i++){
    arrWord +=arr[i];
}
console.log(arrWord);


let Word=[]
let i=0;
while (i<arr.length){
    Word+=arr[i];
    i++;
}
console.log(arrWord);

let letters=[`a`,`b`,`c`]
let wor=[]
for(let letter of letters){
    wor+= letter;
}
console.log(wor);
