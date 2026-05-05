// #RbQGnH5DuC
//
// В localStorage зберігаються масиви. Вам потрібно зробити функцію, які дістає потрібний вам масив з localStorage та додає в нього об’єкт
//
// сигнатура функції –
//
// addToLocalStorage(arrayName:string,objToAdd:any{}):void

function addToLocalStorage(arrName,objToAdd){
    let lsItem=localStorage.getItem(arrName);
    if(!lsItem){
        throw new Error('There is no initial storage');
    }
    const array=JSON.parse(lsItem);
    if(typeof objToAdd ==='object'){
        array.push(objToAdd);
    }
    localStorage.setItem(arrName,JSON.stringify(array));
}
addToLocalStorage('sessionsList',{})
