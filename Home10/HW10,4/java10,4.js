// #2VaLt4vDczH
//
// є сторінка, на якій є блок, в кому знаходиться цифра. Написати код, який при кожному перезавантажені сторінки буде додавати до неї +1

let newNumber=+localStorage.getItem('number')
newNumber+=1;
localStorage.setItem('number',newNumber);
document.getElementById('target').innerText=newNumber;

