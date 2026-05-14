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
let list=document.getElementById('list');
let next=document.getElementById('next');
let prev=document.getElementById('prev');

let currentPage=0;
const itemsPerPage=10;

function render(){
    list.innerHTML=``;

    let start=currentPage*itemsPerPage;
    let end=start+itemsPerPage;
    const itemsToShow=objects.slice(start,end);
    itemsToShow.forEach(object=>{
        const li=document.createElement("li");
        li.innerText=`${object.id} ${object.name}`
        list.appendChild(li);
    })
    prev.disabled =currentPage===0;
    next.disabled=end >= objects.length;

}
next.onclick=function (){
    if((currentPage+1)*itemsPerPage<objects.length){
        currentPage++;
        render();
    }
}
prev.onclick=function (){
    if(currentPage>0){
        currentPage--;
        render();
    }
}

render();

console.log(objects)
