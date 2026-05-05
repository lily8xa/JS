// #kUSgFqWY
//
// Створити 3 інпута та кнопку. Один визначає кількість рядків, другий – кількість ячеєк, третій – вміст ячеєк.
//
//     При натисканні кнопки вся ця інформація зчитується і формується табличка з відповідним вмістом.

const table=document.getElementById('table');
const formTable=document.forms['tableForm'];
formTable.addEventListener("submit", function (ev) {
    ev.preventDefault();
    table.innerText='';
    const linesValue=+formTable.lines.value;
    const cellValue=+formTable.cells.value;
    const dataValue=formTable.data.value;
    console.log(linesValue,cellValue,dataValue);
console.log(formTable)
    for (let i=0;i< linesValue;i++){
        const tr=document.createElement('tr');
        for(let j=0;j<cellValue;j++){
            const td=document.createElement('td');
            td.innerText=dataValue;
            tr.appendChild(td);
        }
        table.appendChild(tr);

    }
})
