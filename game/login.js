const phone = document.getElementById("phone_number");
const username = document.getElementById("user_name");
const topics = document.getElementById("topics");
const button = document.getElementById("btn-submit");
const form = document.getElementById("form");
const loginContainer = document.getElementById("login_container");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const options = topics.selectedOptions;

  const payload = {
    phone_number: phone?.value,
    username: username?.value,
    topics: Array.from(options).map(({ value }) => value),
  };

  console.log(payload);
});

function postData(data) {
  fetch("https://jsonplaceholder.typicode.com/todos", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}
