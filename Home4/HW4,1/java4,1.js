

function square(aNam,bNam){
    const result=aNam*bNam;
    return result;
}
let p1=square(10,40);
let p2=square(22,44);
console.log(p1);
console.log(p2);

function RoundSquare(radius){
    return Math.PI*radius*radius;
}
let r1=RoundSquare(12);
let r2=RoundSquare(26);
console.log(r1);
console.log(r2);


function CelinderSquare(radius,height) {
    return 2* Math.PI*radius*height;
}
console.log(CelinderSquare(2,5));

// debugger
function ArrFilter(user){
    let usersName=[`Anna`,`Ivan`,`Olesya`,`Valentina`]
    for(let userName of usersName){
        console.log(userName);

    }
    return user;
}
console.log(ArrFilter())


function addPage(page){
    document.write(` <p>${page}</p> `
    )
    return page;
}
console.log(addPage(`Hello`));
console.log(addPage(`World`));


function textLi(text){
    document.write(`<ul>
<li>${text}</li>
<li>${text}</li>
<li>${text}</li>
</ul>`)
    return text;
}
textLi(`Medium`);
console.log(textLi(`Hard`));


// – створити функцію, яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

function TextNumber(text,number){
    document.write(`<ul>`);
    for (let i = 0; i <number; i++) {
        document.write(`<li>${text}</li>`);

    }
    document.write(`</ul>`);
    return text;
}
TextNumber(`Mister`,10)
console.log(TextNumber(`Hard`,3));  // --чому в консоль виводить 2 шт? а в документ вірно

// – створити функцію, яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список (ul li) та виводить його через document.write

function innerFromArr(arr){
    document.write(`<ul>`);
    for (let item of arr){
        document.write(`<li>${item}</li>`);
    }
    document.write(`</ul>`);
    return arr;
}
innerFromArr([12,`col`,12,true,45688,false,`Gorges`])
console.log(innerFromArr([`vork`,122,true]));


function itemUser(users){
    for(let user of users){
        document.write(`<div>${user.id} ${user.name} ${user.age}</div>`);
        console.log(user);
    }
    return users;
}
itemUser(
   [
       {id:1, name:"John",age:19},
    {id:2, name:"January",age:21},
    {id:3, name:"February",age:18},
    {id:4, name:"March",age:26},
    {id:5, name:"April",age:35},
   ]
);
//– створити функцію яка повертає найменьше число з масиву
function minValue(numbers){
    let min=numbers[0];
    for(let i=1; i<numbers.length; i++){
        let number=numbers[i];
        if(number<min){
            min=number
        }
    }
    return min;
}
console.log(minValue([12,-22,88,-12,-36,]));
//– створити функцію sum(arr), яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
 function sum(num){
     let result=0;
     for(let number of num){
         result =result+number;
     }
     return result;
 }
 console.log(sum([1,2,10]))


