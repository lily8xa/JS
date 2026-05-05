// #ymAmN2xJ
//
// Створити форму з трьома полями для name, surname, age та кнопкою. При натисканні на кнопку зчитати дані з полів, та вивести об’єкт в документ. Іншими словами : заповнили форму, натиснули кнопку, під формою з’явився блок з вашим об’єктом

const formCreate=document.forms.create;
const info=document.getElementById("result")

formCreate.addEventListener('submit',function (ev){
    ev.preventDefault()
    const nameValue=this.name.value;
    const surnameValue=this.surname.value;
    const ageValue=this.age.value;
    info.innerText=nameValue+' '+surnameValue+' '+ageValue;

})
console.log(formCreate);
