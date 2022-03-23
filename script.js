const body = document.querySelector("body");

fetch("http://jsonplaceholder.typicode.com/users").then((resposta) => {
  const promiseBody = resposta.json();

  promiseBody.then((data) => {
    data.forEach((user) => {
      const div = document.createElement("div");
      div.classList.add("user");

      const name = document.createElement("h1");
      const username = document.createElement("p");
      const email = document.createElement("p");

      name.textContent = user.name;
      username.textContent = user.username;
      email.textContent = user.email;

      div.append(name, username, email);

      body.append(div);
    });
  });
});
