import "./style.css";

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const emailInput = document.querySelector("#email");
  const emailErro = document.querySelector("#emailErro");
  const senhaInput = document.querySelector("#senha");
  const senhaErro = document.querySelector("#senhaErro");

  emailErro.textContent = "";
  senhaErro.textContent = "";

  if (emailInput.value == "") {
    emailErro.textContent = "Email é obrigatório";
    return;
  }


  if (senhaInput.value == "") {
    senhaErro.textContent = "Senha é obrigatória";
    return;
  }


  window.location.href="index.html"
});
