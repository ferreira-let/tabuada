function tabuada() {
  var num = parseInt(document.getElementById("num").value);
  var resposta = document.getElementById("resposta");
  
  resposta.innerHTML = "";
  for (var i = 1; i <= 10; i++) {
      resposta.innerHTML += num + " x " + i + " = " + (num * i) + "<br>";
  }
}
