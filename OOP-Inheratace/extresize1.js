/*car classes*/

class Car{
    constructor(brand, model, motion = 0){
        this.brand = brand;
        this.model = model;
        this.motion = motion;
    }
    checkMorion(){
        return this.motion > 0 ? "Car is moving" : "Car is not moving"
    }
    accelerate(speed){
        this.motion += speed;
    }
    break(speed){
        this.motion -= speed;
        if(this.motion < 0 ){
            this.motion = 0;
        }
    }
    status(){
        console.log(
            `${this.brand} ${this.model} is running ${this.motion} km/h, ${this.checkMorion()}`
        );
    }
    stop(){
        this.motion = 0;
    }
}
var car1 = new Car("Ford", "Mondeo");
var car2 = new Car("Toyota", "Camri");
var car3 = new Car("Honda", "Civic");
car1.accelerate(50);
car1.status();
car1.break(20);
car1.status();
car1.stop();
car1.status();

/*TV class*/

class TV{
    constructor(brand){
        this.brand = brand;
        this.channel = 1;
        this.volume = 50;
    }
    increaseVolume(){
        if(this.volume < 100){
            this.volume++;
        }
    }
    decreaseVolume(){
        if(this.volume > 0){
            this.volume--;
        }
    }
    setChannel(channel){
        if(channel >=1 && channel <= 50){
            this.channel = channel;
        }
    }
    reset(){
        this.channel = 1;
        this.volume = 50;
    }
    status(){
        return `${this.brand} at channel ${this.channel}, volume ${this.volume}`;
    }
}
var myTv = new TV("Panasonic");
console.log(myTv.status());
myTv.setChannel(8);
myTv.increaseVolume();
console.log(myTv.status());
myTv.reset();
console.log(myTv.status());