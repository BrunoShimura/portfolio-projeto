function teste(nome, num) {
  if (nome == "" || num == "") {
    document.getElementById("alert").innerHTML =
      "Digite os valores corretamente";
  } else {
    if (num == 2) entrar();
    else {
      document.getElementById("alert").innerHTML = "Resposta errada";
    }
  }
}
function entrar() {
  window.location.href = "/pages/perfil.html";
}
