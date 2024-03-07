const input = document.querySelector('#input')

const ol = document.querySelector('ol')

let todoArray = []


// input add button //

function addTodo(){

    todoArray.push(input.value)

    input.value = ''

    ol.innerHTML = ''

    for(let i = 0; i < todoArray.length; i++){

        ol.innerHTML += `<li id= "list-item">${todoArray[i]}
        
        <button onclick = "liDelBtn(${i})">Delete</button>
        <button onclick = "liEditBtn(${i})">Edit</button>

        </li>`
    }
}


// input del button //

function delTodo(){

    todoArray = []

    ol.innerHTML = ''
}




// li del button //

function liDelBtn(index){

    todoArray.splice(index, 1)

// we can a function of the below code because we are using it many times //

    ol.innerHTML = ''

    for(let i = 0; i < todoArray.length; i++){

        ol.innerHTML += `<li id= "list-item">${todoArray[i]}
        
        <button onclick = "liDelTodo(${i})">Delete</button>
        <button onclick = "liEditBtn(${i})">Edit</button>

        </li>`
    }
}


// li edit button // 

function liEditBtn(index){

    const userInput = prompt("Edit the value...")

    todoArray.splice(index, 1, userInput)

    // we can a function of the below code because we are using it many times //

    ol.innerHTML = ''

    for(let i = 0; i < todoArray.length; i++){

        ol.innerHTML += `<li id= "list-item">${todoArray[i]}
        
        <button onclick = "liDelTodo(${i})">Delete</button>
        <button onclick = "liEditBtn(${i})">Edit</button>

        </li>`
    }
}

