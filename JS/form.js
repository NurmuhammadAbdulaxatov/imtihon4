// let email = document.querySelector(".email");
// let password = document.querySelector(".password");
let log = document.querySelector("form");

log.addEventListener("submit", async (e) => {
  e.preventDefault();
  let email = e.target[0].value;
  let password = e.target[1].value;

  if (email && password) {
    let {
      data: { token },
    } = await axios.post("https://reqres.in/api/login", { email, password });
    localStorage.token = token;
    document.location.replace("../index.html");
  }
});
