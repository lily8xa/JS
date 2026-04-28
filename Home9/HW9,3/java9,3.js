// #jeBqHV525U5
//
// – Є масив
//
//
//
// Для кожного елементу масиву зробити блок, в якому вивести інформацію про title та monthDuration
//
// Завдання робити через цикли.
let coursesAndDurationArray = [
    {title: '‘JavaScript Complex’', monthDuration: 5},

{title: '‘Java Complex’', monthDuration: 6},

{title: '‘Python Complex’', monthDuration: 6},

{title: '‘QA Complex’', monthDuration: 4},

{title: '‘FullStack’', monthDuration: 7},

{title: '‘Frontend’', monthDuration: 4} ];

for(let course of coursesAndDurationArray) {

    const newBlock=document.createElement('div')
    const h1=document.createElement('h1')
    h1.innerText=course.title;
    const p=document.createElement('p')
    p.innerText=course.monthDuration
    newBlock.append(h1,p)
    document.body.appendChild(newBlock)

}

