// #OPLI89c9G
//
// – Є масив:
//
//
//
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr= ['Main','Products','About us','Contacts'];
let menu=document.createElement('ul')
for(const item of arr){
    const li=document.createElement("li");
    li.innerText=item
    menu.appendChild(li)
}
document.body.append(menu)
