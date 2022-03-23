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
      const website = document.createElement("p");

      name.textContent = user.name;
      username.textContent = user.username;
      email.textContent = user.email;
      website.textContent = user.website;

      div.append(name, username, email, website);

      body.append(div);
    });
  });
});
