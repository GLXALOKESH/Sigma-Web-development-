let prom1 = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("Inside prom1")
    }, 3000);
    resolve("prom1 done")
})
prom1.then((a)=>{
    console.log(a)
})
let prom2 = new Promise((resolve,reject) =>{
    let num = Math.random()
    console.log(num)
    if(num > 0.5){
    setTimeout(() => {
        console.log("Inside prom2")
    }, 2000);
    resolve("resolved")
}
else {
    reject("prom2 rejected")
}
})  

prom2.then((e) => {
    console.log(e);
}).catch((err)=>{
    console.log(err)
})

let prom3 = new Promise((resolve, reject) => {
    let num = Math.random()
    console.log(num)
    if(num<0.5){
        setTimeout(() => {
            console.log("inside Prom3");
        }, 2000);
        resolve("resolved prom3")
    }
    else{
        reject("prom 3 rejected");
    }
})

prom3.then((e)=>{
    console.log(e)
}).catch((err)=>{
    console.log(err);
})

let pr = Promise.all([prom1, prom2, prom3])
pr.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
})

let pr2 = Promise.allSettled([prom1, prom2, prom3])
pr2.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
})

let pr3 = Promise.race([prom1, prom2, prom3])
pr3.then((a)=>{
    console.log(a)
    console.log("race done")
}).catch((a)=>{
    console.log(a)
})

let pr4 = Promise.any([prom1, prom2, prom3])
pr4.then((a)=>{
    console.log(a)
}).catch((a)=>{
    console.log(a)
})