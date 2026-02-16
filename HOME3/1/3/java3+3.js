// #0pm3EyTKy9
//
// – Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
const arrFirst=[]
arrFirst[0]=`October`;
arrFirst[1]=2;
arrFirst[2]=true;
arrFirst[3]=4;
arrFirst[4]=`Monday`;
arrFirst[5]=6;
arrFirst[6]=false;
arrFirst[7]=8;
arrFirst[8]=`yes`;
arrFirst[9]=10;
for(let i=0;i<arrFirst.length;i++){
    console.log(arrFirst[i]);
}
//
//     #mDMWMW5a
//
// – Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<10;i++){
    document.write(`<div>${i+1}</div>`)
}
for(let i=0;i<10;i++){
    console.log(i+1);
}
//
// #4sXhaa5YMM
//
// – Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i++){
    document.write(`<div>Number step-${i+1}</div>`)
}
for(let i=0;i<100;i++){
    console.log(i+1);
}
//
// #s24slNyz7
//
// – Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for(let i=0;i<100;i+=2){
    document.write(`<div> step-${i+1}</div>`)
}
for(let i=0;i<100;i+=2){
    console.log(i+1);
}
//
console.log(`// #zananT5FR1`)
//
// – Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
//
for(let i=0;i<100;i++){
    if (i%2===0){
        console.log(i);
    }
}
for(let i=0;i<100;i++)
if(i%2===0)
{
    document.write(`<div>${i}</div>`)
}
// #Tfrwls7FM
//
// – Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let i=0;i<100;i++){
    if (i%2===1){
        document.write(`<div>${i}</div>`)
    }
}
for(let i=0;i<100;i++){
    if (i%2===1){
        console.log(i);
    }
}
