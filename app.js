let getOl = document.querySelector(".Ol");
let getInp = document.querySelector("#inp");



loadTodos();

function loadTodos() {
    let todos = JSON.parse(localStorage.getItem('Data')) || [];
    getOl.innerHTML = ''; 
    
    todos.forEach(todo => {
        addTodoToDOM(todo);
    });
}

function addTodoToDOM(todoText) {
    getOl.innerHTML += `<li class="d-flex align-items-center bg-white p-2 mb-2 mt-3 rounded" id="list"> 
        <span>${todoText}</span> 
       <img src='Img/pen.png'width='50px' hegith='50px'  <button class="m-2" onclick="editTodo(this)"></button>
       <img src='Img/bin.png' width='50px' hegith='50px' <button class="m-2" onclick="delTodo(this)"></button>
    </li>`;
}

function addTodo() {
    let todos = JSON.parse(localStorage.getItem('Data')) || [];
    
    if(getInp.value === '') {
        Swal.fire({
            icon: "question",
            text: "Please enter a task",
        });
        return;
    }
    
    todos.push(getInp.value);
    localStorage.setItem('Data', JSON.stringify(todos));
    addTodoToDOM(getInp.value);
    getInp.value = '';
}

function delallTodo() {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete all!",
        cancelButtonText: "Cancel"
    }).then((result) => {
        if (result.isConfirmed) {
            getOl.innerHTML = '';
            localStorage.removeItem('Data');
            Swal.fire({
                title: "Deleted!",
                text: "Your todos have been deleted.",
                icon: "success"
            });
        }
    });
}

function editTodo(El) {
    let spanElement = El.parentNode.querySelector('span');
    let currentText = spanElement.textContent;
    let todos = JSON.parse(localStorage.getItem('Data')) || [];
    let index = Array.from(getOl.children).indexOf(El.parentNode);
    
    Swal.fire({
        title: 'Edit Task',
        input: 'text',
        inputValue: currentText,
        showCancelButton: true,
        confirmButtonText: 'Update',
        cancelButtonText: 'Cancel',
        inputValidator: (value) => {
            if (!value) {
                return 'Please enter a task!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            spanElement.textContent = result.value;
            todos[index] = result.value;
            localStorage.setItem('Data', JSON.stringify(todos));
        }
    });
}

function delTodo(El) {
    let todos = JSON.parse(localStorage.getItem('Data')) || [];
    let index = Array.from(getOl.children).indexOf(El.parentNode);
    
    if (index > -1) {
        todos.splice(index, 1);
        localStorage.setItem('Data', JSON.stringify(todos));
        El.parentElement.remove();
    }
}

