function pegaValorCifrar() {
  let text = document.getElementById("cd").value;
  let deslocamento = Number(document.getElementById("des").value);
  document.getElementById("retorno").innerHTML= `Seu codigo cifrado é ${window.cipher.encode(text, deslocamento)} `;
}

function pegaValorDecifrar() {
  let text = document.getElementById("cd").value;
  let deslocamento = Number(document.getElementById("des").value);
  document.getElementById("retorno").innerHTML= `Seu codigo decifrado é ${window.cipher.decode(text, deslocamento)} `;
}