//EXERCISE = Add a new item at the end of the list by input

//TRYING TO DO BY MYSELF
//Grabbing elements
let form = document.getElementById('addForm')
let ul = document.getElementById('items')
let filter = document.getElementById('filter')

//Calling events
form.addEventListener('submit', addItem)
ul.addEventListener('click', removeItem)
filter.addEventListener('keyup', filterItems)

//Functios
function addItem(e){
  e.preventDefault()

  //Creating the 'input' element to add in DOM
  let input = document.getElementById('item').value
  
  let newLi = document.createElement('li')
  newLi.className = 'list-group-item'

  newLi.appendChild(document.createTextNode(input))
  ul.appendChild(newLi)

  //Creating error button
  let errorButton = document.createElement('button')
  errorButton.className = 'btn btn-danger btn-sm float-right delete'
  errorButton.appendChild(document.createTextNode('X'))
  
  newLi.appendChild(errorButton)
  
}

function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are you sure ?')){
      let parentLi = e.target.parentElement
      ul.removeChild(parentLi)
    }
  }
}

function filterItems(e){
  //convert text to lowercase
  let text = e.target.value.toLowerCase()

  // get li's
  let listItems = document.getElementsByTagName('li')

  //convert to an array
  Array.from(listItems).forEach(function(item){
    let itemName = item.firstChild.textContent
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block'
    } else{
      item.style.display = 'none'
    }
    
  })

  
}


//items = ul
//itemname = li text content

