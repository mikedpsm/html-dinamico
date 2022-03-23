const input = document.querySelector("input");
const tasks = document.querySelector("ul");

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" || input.value === "") return;

  const task = document.createElement("li");

  task.textContent = input.value;
  tasks.append(task);

  input.value = "";
});
