window.cipher = {encode: cifrar, decode: decifrar};

function cifrar(text, deslocamento){
  let resultado = "";
  for (let i=0; i < text.length; i++){
    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
      resultado += String.fromCharCode((text.charCodeAt(i) - 65 + deslocamento) % 26 + 65);
  }
    else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      resultado += String.fromCharCode((text.charCodeAt(i) - 97 + deslocamento) % 26 + 97);
  }
    else{
      resultado = charCodeAt(i);
    }
    
  }
   
  console.log(resultado);
}

function decifrar(text, deslocamento){
  let resultado = "";
  
  for (let i=0; i < text.length; i++){

    if (text.charCodeAt(i)>=65 && text.charCodeAt(i)<=90){
      resultado += String.fromCharCode((text.charCodeAt(i) - 90 - deslocamento) % 26 + 90);
  }
    else if (text.charCodeAt(i)>=97 && text.charCodeAt(i)<=122){
      resultado += String.fromCharCode((text.charCodeAt(i) - 122 - deslocamento) % 26 + 122);
  }
    else {
      resultado = charCodeAt(i);

    }
  }
  console.log(resultado);
}
