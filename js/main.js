function teste(nome, num) {
  if (nome == "" || num == "") {
    document.getElementById("alert").innerHTML =
      "Digite os valores corretamente";
  } else {
    if (num == 42) {
      document.getElementById("alert").innerHTML =
        '<div class="spinner"></div>';
      entrar();
    } else {
      document.getElementById("alert").innerHTML = "Resposta errada";
    }
  }
}
function entrar() {
  window.location.href = "/pages/perfil.html";
}
