// #j693ca8
//
// – створити інпут, який приймає вік людини, та кнопку, яка підтверджує дію. При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік, чи менше він за 18, та повідомити про це користувача

const button=document.getElementsByTagName("button")[0];
button.onclick=function (ev){
    ev.preventDefault();
    document.getElementById("age")

    if(this.value<18){
        const h1=document.createElement('h1')
        h1.innerText="You are still too young"
        document.body.appendChild(h1)
    }
}
