class Car{
    constructor( model,manufacturer,year,maxSpeed,engineCapacity){
        this.model = model
        this.manufacturer = manufacturer
        this.year = year
        this.maxSpeed = maxSpeed
        this.engineCapacity = engineCapacity
    }
    drive(){
        console.log(`Ми їдемо з максимальною швидкістю ${this.maxSpeed} кілометрів за годину`)
    }
    info(){
        for(const key in this){
            console.log(key,this[key])
        }
    }
    speedUp(speedUp){
        this.maxSpeed=this.maxSpeed+speedUp
    }
    changeYear(newYear){
        if(newYear > this.year){
            this.year = newYear
        }
    }
    addDriver(driver){
        if(driver){
            this.driver = driver
        }
    }

}

let car=new Car('Opel','German',2014,250,2.5)
car.drive()
car.info()
car.speedUp(25)
car.changeYear(2026)
car.addDriver([{id: 1, name: 'Olga'},{id:2, name: 'Berlin'}])
console.log(car)

