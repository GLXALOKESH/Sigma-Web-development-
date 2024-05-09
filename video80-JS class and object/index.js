let animals ={
    "eats" : "True"

}
let rabbit ={
    "jumps" : "True" 
} 

rabbit.__proto__ = animals;
console.log(rabbit.eats);

class animal {
    constructor(name){
        this.name
    }
    run(){
        console.log("running");
        
    }
    eats(){
        console.log("eating");
        
    }
}
let a = new animal("rabbit");
a.run()
a.eats()

class lion extends animal{
    constructor(name){
        super(name)
        this.name = name;
    }
    eats(){
        super.eats()
        console.log("eating roar");

        
    }
}

let l = new lion("akku")
l.eats()