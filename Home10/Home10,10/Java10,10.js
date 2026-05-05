// #NKB0tgWIK1G
//
// ***PAGINATION
//
// зробити масив на 100 об’єктів та дві кнопки prev next
//
// при завантаженні сторінки з’являються перші 10 об’єктів.
//
//     При натисканні next виводяться наступні 10 об’єктів
//
// При натисканні prev виводяться попередні 10 об’єктів

let objects=[];
for(let i=0; i<100;i++) {
    objects.push({id: i + 1, name: 'ObjectSuper'})
}

for(let object of objects){
    const li=document.createElement('li')
    li.innerText=object.id +'  '+ object.name;
let list=document.getElementById('list')
list.appendChild(li)
}
let next=document.getElementById('next')
let prev=document.getElementById('prev')
next.onclick=function (){
    console.log(objects[0])
}

console.log(objects)
