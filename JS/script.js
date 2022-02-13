// Mostra o resultado final
function enviar (){
    const selecao = document.getElementById ('escolha'); 
    const codificar = document.getElementById ('codificar');
    const decodificar = document.getElementById ('decodificar');
   
    if (textoEntrada.value != '') {
        const textoEntrada = document.getElementById ('textoEntrada');
        var mensagem;
        if (codificar.checked) {
            mensagem = codificarMensagem (textoEntrada, selecao);
        } else if (decodificar.checked) {
            mensagem = decodificarMensagem (textoEntrada, selecao);
        }

        const mensagemSaida = document.getElementById ('textoFinal');
        mensagemSaida.value = mensagem;
    }
        console.log ('Mensagem inicial: ' + textoEntrada.value);
};

// Base 64 e Cifra de Cesar- lógica

function codificarMensagem (textoEntrada, selecao) {
    let textoCodificado = '';
    if (selecao.value == 'base64') {
        textoCodificado = btoa(textoEntrada.value);
        console.log ('Mensagem codificada em Base64: ' + textoCodificado);
    } else {
        const incrementoChave = document.getElementById ('chaveNumber').value;
        for (let i = 0; i < textoEntrada.value.length; i++) {
            let codigo = textoEntrada.value.charCodeAt(i);
            if (selecao.value == 'cifraCesar') {
                codigo += incrementoChave;
                textoCodificado += String.fromCharCode(codigo);
            }
            console.log ('Chave César: ' + incrementoChave);
            console.log ('Mensagem codificada em Cifra de César: ' + textoCodificado);
        }
    }
    return textoCodificado;
};

function decodificarMensagem (textoEntrada, selecao) {
    let textoDecodificado = '';
    if (selecao.value == 'base64') {
        textoDecodificado = atob(textoEntrada.value);
        console.log ('Mensagem decodificada em Base64: ' + textoDecodificado);
    } else {
        const incrementoChave = document.getElementById ('chaveNumber').value;
        for (let i = 0; i < textoEntrada.value.length; i++) {
            let codigo = textoEntrada.value.charCodeAt(i);
            if (selecao.value == 'cifraCesar') {
                codigo -= incrementoChave;
                textoDecodificado += String.fromCharCode(codigo);
            }
            console.log(textoEntrada.value.charCodeAt(i));
        }
        console.log ('Chave César: ' + incrementoChave)
        console.log ('Mensagem decodificada em Cifra de César: ' + textoDecodificado);
    }
    return textoDecodificado;
};