// #bq1zkx7WP
//
// *** (подібне було вище, але…будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення “100грн”
//
// при перезавантаженні сторінки до значення додається по 10грн, але !!! зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд, нічого не відбуваєтьс


const priseKey='prise'
const timeKey='lastUpdate'

let prise=localStorage.getItem(priseKey);
let lastTime=localStorage.getItem(timeKey);
const now= Date.now();
if(!prise) {
    prise = 100;
    localStorage.setItem(priseKey, prise);
    localStorage.setItem(timeKey, now);}
    else{
        prise= +prise;
        if(lastTime && now-lastTime>=10000){
            prise+=10;
            localStorage.setItem(priseKey, prise);
            localStorage.setItem(timeKey, now);
        }


}

document.getElementById('num').innerText=prise;

