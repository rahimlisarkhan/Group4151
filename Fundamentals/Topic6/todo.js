const infoMessage = document.querySelector("#infoMessage"),
  todoInput = document.querySelector("#todoInput"),
  todoList = document.querySelector("#todoList"),
  todoSend = document.querySelector("#todoSend");

let todoData = [];

todoInput.addEventListener("input", function (e) {
  const value = e.target.value;

  if (value.length < 20) {
    infoMessage.classList.add("show");
    return;
  }
  infoMessage.classList.remove("show");
});

todoSend.addEventListener("click", function () {
  createTodo();
});

todoInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    createTodo();
  }
});

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

function removeTodo(todoIndex) {
  console.log(todoIndex);

  const newTodoData = todoData.filter((item, index) => index !== todoIndex);

  todoData = newTodoData;

  renderTodoList(newTodoData);
}

function renderTodoList(arr) {
  const newContent = arr
    .map(
      (todo, index) =>
        `<li onclick="removeTodo(${index})">${index + 1}. ${todo} </li>`
    )
    .join("");

  console.log(newContent);

  todoList.innerHTML = newContent;
}
