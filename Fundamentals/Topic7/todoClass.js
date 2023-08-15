class TodoApp {
  data = [];
  completed = [];
  randomIndex = {
    dataIndex: null,
    completedIndex: null,
  };

  constructor(name) {
    this.name = name;
  }

  addTodo(text) {
    const todoItem = {
      id: Date.now(),
      title: text,
    };

    this.data.push(todoItem);
  }

  completedTodo = function (todoIndex) {
    this.completed.push(this.data[todoIndex]);

    const newData = this.data.filter((item, index) => index !== todoIndex);

    const randomIndex = () => {
      this.randomIndex = {
        dataIndex: Math.random() * this.data.length,
        completedIndex: Math.random() * this.completed.length,
      };
    };

    randomIndex();

    this.data = newData;
  };

  renderTodo = function (listEl) {
    console.log("completed", this.completed);
    console.log("data", this.data);

    listEl.innerHTML = this.data
      .map((item) => `<div> ${item.title}</div>`)
      .join("");
  };
}

const todoObj = new TodoApp("MyTodoJohn");

const todoVuqarObj = new TodoApp("VuqarTodo");

const todoInput = document.querySelector("#todoInput");
const todoSend = document.querySelector("#todoSend");
const todoList = document.querySelector("#todoList");

todoSend.addEventListener("click", function () {
  const value = todoInput.value;
  todoObj.addTodo(value);

  todoObj.renderTodo(todoList);
});
