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

//let items = document.getElementsByClassName("list-group-item")
//console.log(items)
//console.log(items[0])
//items[0].textContent = "Ankush"
//items[0].style.fontWeight = "bold"
//items[1].style.fontWeight = "bold"
//items[2].style.fontWeight = "bold"
//items[3].style.fontWeight = "bold"
//items[2].style.backgroundColor = "green"

//color code also work for separate elements
//items[2].style.backgroundColor = "#f4f4f4"


// THis will not work
// items.style.backgroundColor = "#f4f4f4"


//This will work
//for(i=0;i<items.length;i++){
    //items[i].style.backgroundColor = "#f4f4f4"
//}


// GET ELEMENT BY TAG NAME
// this means going by tag line h1,li,h3

//let li = document.getElementsByTagName("li")
//console.log(li)
//console.log(li[0])
//li[0].textContent = "Ankush"
//li[0].style.fontWeight = "bold"
//li[1].style.fontWeight = "bold"
//li[2].style.fontWeight = "bold"
//li[3].style.fontWeight = "bold"
//li[3].style.backgroundColor = "green"

// QUERYSelector

//let header = document.querySelector("#main-header")
//header.style.borderbottom = "solid 4px black"


//let input = document.querySelector("input")
//input.value = "Hello world"

//let submit = document.querySelector("input[type='submit']")
//submit.value="SEND"

//let item = document.querySelector(".list-group-item")
//item.style.color = "green"

//let lastitem = document.querySelector(".list-group-item:last-child")
//lastitem.style.color = "blue"

//let seconditem = document.querySelector(".list-group-item:nth-child(2)")
//seconditem.style.color = "yellow"

//let seconditem = document.querySelector(".list-group-item:nth-child(2)")
//seconditem.style.display = "none"


// QueryselectAll
//let title = document.querySelectorAll(".title");
//console.log(title)
//title[0].textContent = "Hello"

//let odd = document.querySelectorAll("li:nth-child(odd)");
//for (let i=0;i<odd.length;i++){
  //odd[i].style.backgroundColor = "yellow"
//}

//let even = document.querySelectorAll("li:nth-child(even)");
//for (let i=0;i<even.length;i++){
  //even[i].style.backgroundColor = "green"
//}







// Traversing the DOM //

//Parent Node

//let itemList = document.querySelector("#items")
//parentnode
//console.log(itemList.parentNode)

//itemList.parentNode.style.backgroundColor = "yellow"

//parent node in parent node

//console.log(itemList.parentNode.parentNode)

//parent node in parent node going again in node again and again


//console.log(itemList.parentNode.parentNode.parentNode.parentNode)




//Parent element is same as parent node
//let itemList = document.querySelector("#items")

//console.log(itemList.parentElement)

//itemList.parentElement.style.backgroundColor = "lightblue"

//console.log(itemList.parentElement.parentElement)

//console.log(itemList.parentElement.parentElement.parentElement.parentElement)




//Child Nodes

//let itemList = document.querySelector("#items")

//console.log(itemList.childNodes)
//it also takes 1 node for space if we given space ..but if we get direx







//Children element means only give elements not any space of anything

//let itemList = document.querySelector("#items")

//console.log(itemList.children)
//itemList.children[1].style.backgroundColor = "red"

//console.log(itemList.children[1])
//console.log(itemList.children[3])




//we have first and last child

//console.log(itemList.firstChild)

//console.log(itemList.firstElementChild)

//itemList.firstElementChild.textContent = "Ankush"

//console.log(itemList.lastChild)

//itemList.lastElementChild.textContent = "Waghmare"

//console.log(itemList.lastElementChild)




// We have also the sibling

//console.log(itemList.nextSibling)

//console.log(itemList.nextElementSibling)

//itemList.nextElementSibling.textContent = "Waghmare"

//if any sibling have it does print else give null. sibling means having another node or element

//console.log(itemList.previousSibling)

//console.log(itemList.previousElementSibling)

//itemList.previousElementSibling.style.color = "blue"








// create element and add in the live//



// create element
//let newDiv = document.createElement("div")

// add class
//newDiv.className = "Hello";

//add id
//newDiv.id = "hello1";

//add attribute 
//newDiv.setAttribute("title","hello Div");

//create text node
//let newDivText = document.createTextNode("I am Ankush Waghmare");

//add text to div
//newDiv.appendChild(newDivText);

//let container = document.querySelector("header .container");
//let h1 = document.querySelector("header h1");


//container.insertBefore(newDiv,h1)

//newDiv.style.fontSize = "40px"



//////////////////////////////////////

//let a = document.getElementById("items");

//let b = document.createElement("li");
//b.textContent = "Hello World";

//a.insertBefore(b, a.firstChild);

