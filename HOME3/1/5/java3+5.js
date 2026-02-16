// 1. Створити пустий масив та :
//
//     a. заповнити його 50 парними числами за допомоги циклу.
//
//     b. заповнити його 50 непарними числами за допомоги циклу.
//
//     c. Заповнити масив 20-ма рандомними числами. (Google: Generate random number JS)

let arrOne=[]

for(let i=1; i<=50; i++){
    arrOne.push(i*2);
}
console.log(arrOne)

let arrTwo=[]
for(let i=0; i<50; i++){
    arrTwo.push(i*2+1);
}
console.log(arrTwo)


let arrThree=[]
for(let i=0; i<20; i++){
    arrThree.push(Math.floor(Math.random()*100));
}
console.log(arrThree)
//
// d. Заповнити масив 20-ма рандомними числами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arrFour=[]
for(let i=0; i<20; i++){
    arrFour.push(Math.floor(Math.random()*1000))
    if(i>=8 && i<=732){    //- Тут також щось пішло не так
        }
}
console.log(arrFour)
//
// 2. Вивести за допомогою console.log кожен третій елемент
for (let i=2;i<arrFour.length; i+=3) {

    console.log(arrFour[i])
}

//
// 3. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним.
console.log(`Trete`)

for (let i=2;i<arrFour.length; i+=3) {
    if (arrFour[i] % 2 === 0)
    {

        console.log(arrFour[i])
    }
}
//
// 4. Вивести за допомогою console.log кожен третій елемент, тільки якщо цей елемент є парним, та записати їх в новий масив
let arrFive=[]
for (let i=2;i<arrFour.length; i+=3) {
    if (arrFour[i] % 2 === 0){
    arrFive.push(arrFour[i])}
}
console.log(arrFive)
//
// 5. Вивести кожен елемент масиву, сусід справа якого є парним


//
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

console.log(`Числа парні з правого боку`)
let arrSix=[]
for(let i=0; i<30; i++){
    arrSix.push(Math.floor(Math.random()*100));
}
for (let i = 0; i < arrSix.length-1; i++ ) {
    if (arrSix[i + 1] % 2 === 0) {
        console.log(arrSix[i])
    }
}
console.log(`masuv`)
console.log(arrSix)

//
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
//
//

let arrSeven=[100,250,50,168,120,345,188]
let sum=0;
for (let i=0; i< arrSeven.length; i++){
    sum+=arrSeven[i]  //не розумію чому +=, просто + не працює
}

let hek= sum / arrFive.length;
console.log(hek)

// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
//

let arrEight=[]
for(let i=0; i<10; i++){
    arrEight.push(Math.floor(Math.random()*1000))
}
console.log(arrEight)
let arrEightFive=[]
let num=0;
for (let i=0; i<arrEight.length; i++){
    num+=arrEight[i]*5;{
        arrEightFive.push(num)
    }

}
console.log(arrEightFive)
console.log(arrEight)

// 8. Створити масив з будь-якими значеннями (стрінги, числа, і тд…). пройтись по ньому, і, якщо елемент є числом, додати його в інший масив.
//
//
let arr =[`great`,69,true,1,`The`,`Best`, 125,`Day`,96,false,`Impotent`,`Yoy-yoy`]
let arrNumber=[]
for(let i=0; i<arr.length; i++){
    if(typeof arr[i] === `number`){
        arrNumber.push(arr[i]);
    }
}
console.log(arrNumber)
