const input = document.querySelector("input");

input.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  input.value = "";
});
