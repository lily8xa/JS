let i=0;
while(i<20){
    document.write(`<h1>Interesting ${i+1} `+i+`</h1>`);
    ++i;
}


let listOfItems = [`‘html’`,` ‘css’`, `‘javascript’`, `‘mysql’`, `‘mongodb’`, `‘react’`, `‘angular’`, `‘node.js’`];
document.write(`<ul>`);
for(let item of listOfItems) {
    document.write(`<li>${item}</li>`);
}
    document.write(`</ul>`)


