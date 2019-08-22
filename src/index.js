function pegaValorCifrar(){
    let text = document.getElementById("cd").value;
    let deslocamento = Number(document.getElementById("des").value);
    window.cipher.encode(text, deslocamento);
}

function pegaValorDecifrar(){
    let text = document.getElementById("cd").value;
    let deslocamento = Number(document.getElementById("des").value);
    window.cipher.decode(text, deslocamento);
}


