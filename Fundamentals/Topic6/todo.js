const infoMessage = document.querySelector("#infoMessage"),
  todoInput = document.querySelector("#todoInput"),
  todoList = document.querySelector("#todoList"),
  todoSend = document.querySelector("#todoSend");

let todoData = [];

// todoInput.addEventListener("input", function (e) {
//   const value = e.target.value;

//   if (value.length < 20) {
//     infoMessage.classList.add("show");
//     return;
//   }
//   infoMessage.classList.remove("show");
// });

todoSend.addEventListener("click", addList);

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createTodo();
  }
});

function addList() {
  alert("gozleyin....");

  createTodo();
}

function createTodo() {
  const value = todoInput.value;

  if (value.length < 20) {
    alert("Error");
    return;
  }

  todoData.push(value);
  todoInput.value = "";

  renderTodoList(todoData);
}

function removeTodo(e, todoIndex) {
  console.log(todoIndex);
  todoSend.removeEventListener("click", addList);

  // e.target.style.text

  const newTodoData = todoData.filter((item, index) => index !== todoIndex);

  todoData = newTodoData;

  renderTodoList(todoData);
}

function renderTodoList(arr) {
  const newContent = arr
    .map(function (todo, index) {
      return `<li class="">
      <span>${
        index + 1
      }. ${todo}</span> <button class="bg-danger" onclick="removeTodo(this,${index})">X</button>
    </li>`;
    })
    .join("");

  console.log(newContent);

  todoList.innerHTML = newContent;
}

var a = 5;
console.log(a);

a = 10;
