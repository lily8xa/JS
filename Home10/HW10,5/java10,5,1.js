const sessionsList = JSON.parse(localStorage.getItem("sessionsList"));
for(const session of sessionsList){
    const div=document.createElement("div");
    div.innerText=session.toString()
    document.body.appendChild(div);
    console.log(session);
}
