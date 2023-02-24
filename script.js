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

//console.log(document.getElementById("header-title"));

//let headertitle = document.getElementById("header-title");
//let mainheader = document.getElementById("main-header");
//console.log(headertitle)

//headertitle.textContent = "Bye"
//headertitle.innerText = "Joker"

//headertitle.innerHTML = "<h1>Hello</h1>"

//headertitle.style.borderBottom = "solid 3px black"
//mainheader.style.border = "solid 3px black"





// GET ELEMENT BY CLASS NAME

let items = document.getElementsByClassName("list-group-item")
console.log(items)
console.log(items[0])
items[0].textContent = "Ankush"
items[0].style.fontWeight = "bold"
items[1].style.fontWeight = "bold"
items[2].style.fontWeight = "bold"
items[3].style.fontWeight = "bold"
items[2].style.backgroundColor = "green"

//color code also work for separate elements
//items[2].style.backgroundColor = "#f4f4f4"


// THis will not work
// items.style.backgroundColor = "#f4f4f4"


//This will work
//for(i=0;i<items.length;i++){
    //items[i].style.backgroundColor = "#f4f4f4"
//}

