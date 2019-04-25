let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon"
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox"
  }
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let ul = document.createElement("ul");

  h1.innerText = "Todo List";

  app.appendChild(h1);
  app.appendChild(ul);

  todos.forEach(item => {
    //loop through array and do something each time
    let checkbox = document.createElement("input");
    let li = document.createElement("li");
    let desc = item.description;
    checkbox.type = "checkbox";
    li.append(checkbox, desc);
    ul.append(li);
  });
}

renderTodoApp();
