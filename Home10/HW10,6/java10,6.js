// #Jg0gPO00
//
// створити конвертор ваги з кг в фунти. дані заповнюються через інпут. При введенні даних обрахунок стається миттєво, без натискань додаткових кнопок


const input=document.getElementById('convert');
const result=document.getElementById('result');
input.addEventListener('input',function(){
    result.innerText=+this.value / 2.2+''+'Funt'
})
