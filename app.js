let getOl = document.querySelectorAll(".Ol")[0];

function addTodo() {
    let getInp = document.querySelector("#inp");
    getOl.innerHTML += `<li class="d-flex align-items-center flex-column bg-white p-2 mb-2 mt-3 rounded"> 
    <span>${getInp.value}</span> 
    <button class="btn btn-primary m-2 px-4" onclick="editTodo(this)"> Editing </button>
    <button class="btn btn-danger m-2 px-4" onclick="this.parentElement.remove()"> Delete </button>
    </li>`
    getInp.value = ''; 
}

function delallTodo() {
  let getOl = document.querySelectorAll('.Ol')[0];
  getOl.innerHTML = '';
}

function editTodo(El) {
    let spanELement = El.parentNode.querySelector('span');
    let getPrompt = prompt("Enter Updated Value", spanELement.textContent)
    if (getPrompt !== null){
        spanELement.textContent = getPrompt
    }
}

function delTodo(El) {
  El.parentElement.remove();
}

