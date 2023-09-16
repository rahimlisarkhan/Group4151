// const result = "[2, 3, 4]";

// const result = {
//   name: "Test",
//   age: 32,
// };

// localStorage.setItem("student", JSON.stringify(result));
// sessionStorage.setItem("age", 43);
// const data = localStorage.getItem("todoData");

// const convertData = JSON.parse(data);

// console.log(convertData);

// localStorage.removeItem("todoData");

// localStorage.clear();

const btnel = document.querySelector(".open");

let localStoreValue = JSON.parse(localStorage.getItem("isOpen"));

console.log("localStoreValue", localStoreValue);

let isOpen = localStoreValue ?? false;

showPanel();

btnel.addEventListener("click", function () {
  isOpen = isOpen ? false : true;

  localStorage.setItem("isOpen", isOpen);

  showPanel();

  console.log(isOpen);
});

function showPanel() {
  const menuSection = document.querySelector(".menu");
  const panelSection = document.querySelector(".panel");
  if (isOpen) {
    menuSection.style.display = "block";
    panelSection.style.width = "70%";
  } else {
    menuSection.style.display = "none";
    panelSection.style.width = "100%";
  }
}

//? todoapp

const sendBtn = document.querySelector("#sendBtn");
let todoStoredaki = JSON.parse(localStorage.getItem("todo")); //? [{name:"das"},{name:""}]

let todoData = todoStoredaki ?? []; // []
// let todoData = JSON.parse(localStorage.getItem("todo")) || [];

console.log("todoData", todoData);

sendBtn.addEventListener("click", function () {
  const name = document.querySelector("#name").value;
  const age = document.querySelector("#age").value;
  const job = document.querySelector("#job").value;

  const form = {
    name,
    age,
    job,
  };

  todoData.push(form);

  localStorage.setItem("todo", JSON.stringify(todoData));

  renderItems();

  console.log("form", form);
  console.log("todoData", todoData);
});

function renderItems() {
  const listEl = document.querySelector(".listEl");

  listEl.innerHTML = todoData
    .map(
      (todo, index) =>
        `<li onclick="removeTodo(${index})"> ${todo.name} | ${todo.age} | ${todo.job} </li>`
    )
    .join("");
}

renderItems();

function removeTodo(i) {
  todoData = todoData.filter((todo, index) => index !== i);
  localStorage.setItem("todo", JSON.stringify(todoData));

  renderItems();
}
