window.cipher = {encode: cifrar, decode: decifrar};

function cifrar(text, deslocamento){
  let resultado = "";
  for (let i=0; i < text.length; i++){
      resultado += String.fromCharCode((text.charCodeAt(i) - 65 + deslocamento) % 26 + 65);
  }
  
  console.log(resultado);
}

function decifrar(text, deslocamento){
  let resultado = "";
  for (let i=0; i < text.length; i++){
      resultado += String.fromCharCode((text.charCodeAt(i) - 90 - deslocamento) % 26 + 90);
  }
  console.log(resultado);
}
