//Examine the document object

//console.dir(document);

//console.log(document.domain)
//console.log(document.title)
//console.log(document.URL)
//console.log(document.body)
//console.log(document.doctype)
//console.log(document.head)
//console.log(document.body)
//console.log(document.all[10]);
// document.all[10].textContent = "Ankush"
//console.log(document.forms)
//console.log(document.links)
//console.log(document.images)

console.log(document.getElementById("header-title"));

let headertitle = document.getElementById("header-title");
let mainheader = document.getElementById("main-header");
console.log(headertitle)

headertitle.textContent = "Bye"
headertitle.innerText = "Joker"

headertitle.innerHTML = "<h1>Hello</h1>"

headertitle.style.borderBottom = "solid 3px black"
mainheader.style.border = "solid 3px black"

