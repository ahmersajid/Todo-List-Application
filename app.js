let getOl = document.querySelectorAll(".Ol")[0];
let getInp = document.querySelector("#inp");

window.onload = Swal.fire({
  icon:"success",
  title:"Welcom Sir/Madem",
  text:"This is a Todo-List-Application"
  });

 function addTodo() {
 
let todos = JSON.parse(localStorage.getItem('data')) || [];
       if(getInp.value === ''){
      Swal.fire({
        icon:"question",
        text:"Please enter a task",
      });
      return;
    }
    else{
    getOl.innerHTML += `<li class="d-flex align-items-center flex-column bg-white p-2 mb-2 mt-3 rounded" id="list"> 
    <span>${getInp.value}</span> 
    <button class="btn btn-primary m-2 w-75 px-4" onclick="editTodo(this)"> Editing </button>
    <button class="btn btn-danger m-2 w-75 px-4" onclick="this.parentElement.remove()"> Delete </button>
    </li>`
    todos.push(getInp.value);
    localStorage.setItem('data',JSON.stringify(todos))
    getInp.value = ''};
  }

function delallTodo() {
  let getOl = document.querySelectorAll('.Ol')[0];

 Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "Cancel"
    }).then((result) => {
        if (result.isConfirmed) {
            let getOl = document.querySelectorAll('.Ol')[0];
            getOl.innerHTML = '';
              localStorage.removeItem('data');
            Swal.fire({
                title: "Deleted!",
                text: "Your todos have been deleted.",
                icon: "success"
            });
        }
    });
}

function editTodo(El) {
    let spanELement = El.parentNode.querySelector('span');
    let getPrompt = prompt("Enter Updated Value", spanELement.textContent)
    if (getPrompt !== null){
        spanELement.textContent = getPrompt
    let toods = Array.from(getOl.children).map(li => li.querySelector('span').textContent);
    localStorage.setItem('data',JSON.stringify(toods));
    }
}

function delTodo(El) {
  El.parentElement.remove();
     let todos = Array.from(getOl.children).map(li => li.querySelector('span').textContent);
        localStorage.setItem('data', JSON.stringify(todos));
}

