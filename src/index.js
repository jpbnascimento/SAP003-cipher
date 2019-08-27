document.getElementById("cifrar").addEventListener("click", pegaValorCifrar);

function pegaValorCifrar() {
  event.preventDefault();
  let text = document.getElementById("cd").value;
  let deslocamento = Number(document.getElementById("des").value);
  document.getElementById("retorno").innerHTML= `Seu codigo cifrado é ${window.cipher.encode(deslocamento, text)} `;
}

document.getElementById("decifrar").addEventListener("click", pegaValorDecifrar);

function pegaValorDecifrar() {
  event.preventDefault(); 
  let text = document.getElementById("cd").value;
  let deslocamento = Number(document.getElementById("des").value);
  document.getElementById("retorno").innerHTML= `Seu codigo decifrado é ${window.cipher.decode(deslocamento, text)} `;
}