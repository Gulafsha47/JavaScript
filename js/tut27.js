console.log('welcome to the tut 27');
let car = {
    name: 'maruti 800',
    topSpeed: 89,
    run: function () {
        console.log("car is runing");
    }
}
function GeneralCar(givenName, givenSpeed){
    this.name = givenName;
    this.speed = givenSpeed;
    this.run = function () {
        console.log('${this.name}is running');
    }
    this.analyze = function () {
        console.log('This car is slower by ${200 - this.topSpeed}Km/H than mercedes');
    }
}
car1 = new GeneralCar('Nissan', 180);
car2 = new GeneralCar('MarutiAlto', 80);
console.log(car2);