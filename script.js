const result = document.getElementById("resultado");
const confirm = document.getElementById("calculate");

function insert(valor) {
  result.innerHTML += valor;
}

function clean() {
  result.innerHTML = "   ";
}

function backspace() {
  if (result.textContent) {
    let res = document.getElementById("resultado").innerHTML;
    resultado.innerHTML = res.substring(0, res.length - 1);
  }
}

function confirma() {
  if (resultado.textContent != "erro") {
    document.getElementById("resultado").innerHTML = eval(resultado.innerHTML);
  }
}
