// console.dir(document.body)
let bdy = document.body
console.log(bdy.tagName)
console.log(bdy.innerHTML)
console.log("\n")
console.log(bdy.outerHTML)
console.log(bdy.textContent)
let box1 = bdy.querySelector(".container").querySelector(".box1");
box1.hidden = true
box1.hidden = false
box1.setAttribute("backgroundcolor", "green")

let div =  document.createElement('div')
div.className = "cont"
document.body.append(div);



