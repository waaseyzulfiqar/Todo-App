const input = document.querySelector('#input')

const ol = document.querySelector('ol')

let todoArray = []


// render function //

function render(){

    ol.innerHTML = ''

    for(let i = 0; i < todoArray.length; i++){

        ol.innerHTML += `<li id= "list-item">${todoArray[i]}
        <div class = "li-btns">
        <button onclick = "liDelBtn(${i})">Delete</button>
        <button onclick = "liEditBtn(${i})">Edit</button>
        </div>
        </li>`
    }

}



// input add button //

function addTodo(){

    todoArray.push(input.value)

    input.value = ''

    render()
}


// input del button //

function delTodo(){

    todoArray = []

    ol.innerHTML = ''
}




// li del button //

function liDelBtn(index){

    todoArray.splice(index, 1)

    render()
}


// li edit button // 

function liEditBtn(index){

    const userInput = prompt("Edit the value...")

    todoArray.splice(index, 1, userInput)

    render()
}

