// #gsKLAsNWM
//
// *Через Array.prototype. створити власний foreach, filter

class Cinderella{
    constructor(name,age,footSize) {
        this.name = name
        this.age = age
        this.footSize = footSize
    }
}



let girls=[
    new Cinderella('Sofi',22,36),
    new Cinderella('Freda',25,33),
    new Cinderella('Silva',32,44),
    new Cinderella('Silvia',42,38),
    new Cinderella('Svitlana',18,35),
    new Cinderella('Olga',40,34),
    new Cinderella('Klavdia',36,37),
    new Cinderella('Vanessa',42,41),
    new Cinderella('Valentina', 20,39),
    new Cinderella('Vala',28,40),
]


    girls.forEach((item,index)=>{console.log(item,index)})

const longWords=girls.filter(girls => girls.name.length > 6)
console.log(longWords)
 
