var texto = document.getElementById('codigo').value.toLocaleLowerCase();
function encriptar(){
    var texto = document.getElementById('codigo').value.toLocaleLowerCase();
    var textocifrado = texto.replace(/e/igm,'enter');
    var textocifrado = textocifrado.replace(/i/igm,'imes');
    var textocifrado = textocifrado.replace(/a/igm,'ai');
    var textocifrado = textocifrado.replace(/o/igm,'ober');
    var textocifrado = textocifrado.replace(/u/igm,'ufat');

    document.getElementById('imagen-texto').style.display= 'none';
    document.getElementById('resultado').style.display='none';
    document.getElementById('mensaje-codificado').innerHTML= textocifrado ;
    document.getElementById('mensaje-codificado').style.display= 'show';
    document.getElementById('mensaje-codificado').style.display= 'inherit';
    document.getElementById('copiar-texto').style.display= 'show';
    document.getElementById('copiar-texto').style.display= 'inherit';
}

function desencriptar(){
    var texto = document.getElementById('codigo').value.toLocaleLowerCase();
    var textocifrado = texto.replace(/ai/igm,'a');
    var textocifrado = textocifrado.replace(/imes/igm,'i');
    var textocifrado = textocifrado.replace(/enter/igm,'e');
    var textocifrado = textocifrado.replace(/ober/igm,'o');
    var textocifrado = textocifrado.replace(/ufat/igm,'u');

    document.getElementById('imagen-texto').style.display='none';
    document.getElementById('resultado').style.display='none';
    document.getElementById('mensaje-codificado').innerHTML= textocifrado;
    document.getElementById('mensaje-codificado').style.display= 'show';
    document.getElementById('mensaje-codificado').style.display= 'inherit';
    document.getElementById('copiar-texto').style.display= 'show';
    document.getElementById('copiar-texto').style.display= 'inherit';
}



function copiar (){
    let texto = document.getElementById('mensaje-codificado');
    texto.select();
    document.execCommand('copy');
    alert('Texto copiado al portapaeles!')
}
    


