

let ArrFirst=[351,12,-15236,3,100500]
console.log(ArrFirst)

let ArrSecond=[`I`,`Love`,`you`,`Baby`,`Sting`]
console.log(ArrSecond)

let ArrThird=[`I`,`Love`,`you`,100,true]
console.log(ArrThird)

let ArrFour=[`I`,`Love`,`You`,`love`,`me`,true]
console.log(ArrFour[2])
console.log(ArrFour[1])
console.log(ArrFour[4])



let arrFive=[2,17,13,6,22,31,45,66,100,-18]
let i=0;
while(i<arrFive.length){
    console.log(arrFive[i])
    i++;
}
for(let i=0; i<arrFive.length; i++){
    console.log(arrFive[i]);
}

let j=1;
while(j<arrFive.length){
    {
        console.log(arrFive[j]);
    }
    j+=2;
}

for(let i=1; i<arrFive.length; i+=2){
    console.log(arrFive[i]);
}
console.log(`5parni`);

let f=0
while(f<arrFive.length) {
    if (arrFive [f] %2===0)
    {
        console.log(arrFive[f]);
    }
    f++;
}

for(let g=0; g<arrFive.length; g++)
if (arrFive[g]%2===0)
{
    console.log(arrFive[g]);
}

for(let g=0; g<arrFive.length;g++)
    if (arrFive[g]%3===0)
    {
        arrFive[g]=`Okten`
    }
console.log(arrFive)

arrFive.reverse();
console.log(arrFive)


while(i<arrFive.length-1){
    console.log(arrFive[i])
    i--;
}
console.log(`2reversFor`)
for(let i= arrFive.length -1; i>=0;i--){
    console.log(arrFive[i]);
}



 console.log(`3reversIN`)

let arrSet=[2,17,13,6,22,31,45,66,100,-18]
let o=arrSet.length-1;
while(o>=0){
    if(o %2!==0)
    {
        console.log(arrSet[o]);

    }
    o--;
}

for(let i=arrSet.length-1; i>=0; i--)
{
    if(i%2!==0)
    console.log(arrSet[i]);
}
console.log(`4reversFor`)
let y=arrSet.length-1;
while(y>=0){
    if(arrSet[y]%2===0){
        console.log(arrSet[y]);
    }
    y--;
}

for(let i=arrSet.length-1; i>=0; i--){
    if(arrSet[i]%2===0)
        console.log(arrSet[i]);
}

for(let i=arrSet.length-1; i>=0; i--){
    if(arrSet[i]%3===0){
        arrSet[i]=`Okten`
    }
}
console.log(arrSet);
