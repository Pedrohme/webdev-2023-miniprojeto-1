$('#submit').on('click', (e) => {
  e.preventDefault();
  e.stopImmediatePropagation();
  validateRegister();
});

function validateRegister() {
  const register = document.forms["register"]

  const title = register["title"].value
  const author = register["author"].value
  const publisher = register["publisher"].value
  const year = register["year"].value
  const name = register["name"].value
  const email = register["email"].value

  if (title === "" || author === "" || publisher === "" || year === "" || name === ""|| email === "") {
    alert("Todos os campos precisam ser preenchidos.");
    return false;
  }
}