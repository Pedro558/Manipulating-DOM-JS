//***EXAMINE THE DOCUMENT OBJECT***

//console.log(document.domain) 
//127.0.0.1

//console.log(document.URL)
//http://127.0.0.1:5500/JavaScript/Stage-05/ExtraContent/VanillaCourse/DOM/index.html?

//console.log(document.title)
//DOM Manipulation

//console.log(document.doctype)
//<!DOCTYPE html>

//console.log(document.body)
//<body> ... </body>

//console.log(document.forms)
//returns all forms in the page

//console.log(document.links)
//returns all links in the page



//***SELECTORS***
//GET ELEMENT BY ID

//let headerTitle = document.getElementById('header-title')
//headerTitle.textContent = "Hello World"
//headerTitle.innerHTML = '<h3>Traversy</h3>';
//console.log(headerTitle)
//headerTitle.style.borderBottom = 'solid 3px #000'

//GET ELEMENTS BY CLASS NAME
//let items = document.getElementsByClassName('list-group-item')
//items[1].textContent = 'Hello 2'
//
//for(let i = 0; i < items.length; i++){
//  items[i].style.borderLeft = '3px solid green'
//}

//GET ELEMENTS BY TAG NAME
//Do the same thing above does
//let li = document.getElementsByTagName('li')
//for(let i = 0; i < li.length; i++){
//  li[i].style.borderRight = '3px solid red'
//}

//QUERYSELECTOR
//let header = document.querySelector('#main-header')
//header.style.borderBottom = 'solid 6px blue'
//
//let firstItem = document.querySelector('li')
//firstItem.style.textDecoration = 'line-through'
//
//let lastItem = document.querySelector('.list-group-item:last-child')
//lastItem.style.fontWeight = '800'
//
//let submit = document.querySelector('input[type="submit"]')
//submit.value = 'Send me NOW'

//QUERYSELECTORALL
//let titles = document.querySelectorAll('.title')
//let titlesLength = titles.length
//
//for(let i = 0; i < titlesLength; i++){
//  titles[i].style.borderBottom = '3px solid green'
//}
//
//let odd = document.querySelectorAll('li:nth-child(odd)')
//let even = document.querySelectorAll('li:nth-child(even)')
//for(let i = 0; i < titlesLength; i++){
//    odd[i].style.backgroundColor = '#f4f4f4'
//    even[i].style.backgroundColor = '#ccc'
//}

//***TRAVERSING THE DOM***
//PARENT NODE
//let itemList = document.querySelector('#items')
//itemList.parentNode.style.backgroundColor = '#f4f4f4'
//console.log(itemList.parentNode.parentNode)

//PARENTELEMENT = essentially the same thing above
//console.log(itemList.parentElement)

//CHILDREN = don't return white spaces
//console.log(itemList.children)
//itemList.children[1].style.backgroundColor = 'yellow'

//FIRSTELEMENTCHILD = don't return white spaces
////console.log(itemList.firstElementChild)
//itemList.firstElementChild.textContent = 'hello 1'

//LASTELEMENTCHILD = don't return white spaces
//console.log(itemList.lastElementChild)
//itemList.lastElementChild.textContent = 'hello 4'

//NEXTELEMENTSIBLING = don't return white spaces
//console.log(itemList.nextElementSibling)

//PREVIOUSELEMENTSIBLING = don't return white spaces
//console.log(itemList.previousElementSibling)


//*** CREATING ELEMENTS WITH JS AND ADDING IN HTML *** 
//Create a div
//let newDiv = document.createElement('div')

//Add class
//newDiv.className = 'hello'

//Add id
//newDiv.id = 'id_hello'

//Add attribute
//newDiv.setAttribute('title', 'Hello Div')

//Creating Text Node 
//let newDivText = document.createTextNode('Hello, i am an element created by js')

//Add text to div
//newDiv.appendChild(newDivText)
//newDiv.style.fontStyle = 'italic'
//newDiv.style.color = 'white'

//Adding created div to DOM
//let main = document.querySelector('#main')
//let lastBox = main.lastElementChild

//lastBox.appendChild(newDiv)
//target.insertBefore(newDiv, target)



//*** EVENTS ***
//e = means an user 'event', for example a mouse click
//target = the actual element that was clicked

//let button = document.getElementById('button')
//let box = document.getElementById('box')

//MouseEvents

//button.addEventListener('click', buttonClick)
//button.addEventListener('dblclick', runEvent)
//button.addEventListener('mousedown', runEvent)
//button.addEventListener('mouseup',runEvent)
//box.addEventListener('mouseenter', runEvent)
//box.addEventListener('mouseleave', runEvent)
//box.addEventListener('mousemove', runEvent)

//KeyEvents
//let itemInput = document.querySelector('input[type="text"]');
//let form = document.querySelector('form');

//itemInput.addEventListener('keydown', runEvent)
//itemInput.addEventListener('keyup', runEvent)
//itemInput.addEventListener('keypress', runEvent)

//click-in
//itemInput.addEventListener('focus', runEvent)
//click-out
//itemInput.addEventListener('blur', runEvent)

//itemInput.addEventListener('cut', runEvent)
//itemInput.addEventListener('paste', runEvent)

//itemInput.addEventListener('input', runEvent)

//SelectEvents
//let select = document.querySelector('select')
//select.addEventListener('change', runEvent)


//function buttonClick(e){
  //main.insertBefore(newDiv, target)
  //console.log(e.target)
  //console.log(e.target.id)
  //console.log(e.target.className)
  //console.log(e.target.classList)

  //console.log(e.type);

  //console.log(e.altKey);
  //console.log(e.ctrlKey);
  //console.log(e.shiftKey);
//}

//function runEvent(e){
//  console.log(`EVENT TYPE: ${e.type}`);
//  console.log(`EVENT VALUE: ${e.target.value}`);
//
  //box.style.backgroundColor = 'rgb('+e.offsetX+', '+e.offsetY+', 40)'
//}