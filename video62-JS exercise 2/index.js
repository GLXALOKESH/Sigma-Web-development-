/* Create a business name generator by combining list of adjectives and shop name and another word


Adjectives:
Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub



*/

let adjectives = {
    1:"Crazy",
    2:"Amazing",
    3:"Fire"
}
let shopname ={
    1:"Engine",
    2:"Foods",
    3:"Garments"
}
let Anotherword = {
    1:"Bros",
    2:"Limited",
    3:"Hub"
}

function randnumgen(){
    let num;
    do {
        num = Math.floor(Math.random() * 10) + 1;
    } while (num > 3);
    return num;

}
let ret = randnumgen()
let retstr = ret.toString()
console.log(retstr)
let businessname = adjectives[retstr]
console.log(businessname)