
const formulario = document.querySelector ('forms')
const textoEntrada = document.getElementById ('textoEntrada');
const escolha = document.getElementById ('escolha');
const botoes = document.querySelectorAll ('tipoAcao');
const incrementoChave = document.createElement ('chave');
    incrementoChave.id = 'cifra'
    incrementoChave.type = 'numero'
    incrementoChave.placeholder = 'Digite o código!'
const envio = document.getElementById ('enviar');
let mensagemSaida = document.getElementById ('textoFinal');

// Insere o incremento da Cifra de César!
document.querySelectorAll ('select').forEach((select) => {
    select.addEventListener ('change', (event) => {
        const evento = event.target;
        const valorIncremento = document.getElementById ('incremento');
        
        evento.value === 'cifraCesar' ? valorIncremento.appendChild(incrementoChave) : incrementoChave.remove();
    })
});
    

// Cifra de César - lógica

function cifraCesar (textoEntrada, incrementoChave, botoes) {
    incrementoChave = Number(incrementoChave);
    let mensagemSaida = "";

    for (let i = 0; i < textoEntrada.length; i++) {
        let letra = textoEntrada[i];
        let cod = letra.charCodeAt();

        if (botoes == 'codificar') {
            cod += incrementoChave;
        } else {
            cod -= incrementoChave;
        };
        mensagemSaida += String.fromCharCode(cod);
    };
    return mensagemSaida;
};

// Base 64 - lógica

function base64 (textoEntrada, botoes) {
    if (botoes == 'codificar') {
        return btoa (textoEntrada);
    } else {
        return atob (textoEntrada);
    };
};

// Mostra o resultado final
const mostra = (conteudo) => textoEntrada.innerText = conteudo ; mensagemSaida.appendChild(textoEntrada);

// Checagem de preenchimento de todos os campos
envio.addEventListener( 'click', () => {

    !textoEntrada.value ? (
        alert ('O campo de mensagem é obrigatório!')
    ) : escolha.value === 'cifraCesar' && !incrementoChave.value ? (
        alert( 'Você tem que escolher a chave!')
    ) : escolha.value === 'base64' && textoEntrada.value? (
        mostra(base64())
    ) : escolha.value === 'cifraCesar' && textoEntrada.value ? (
        mostra(cifraCesar())
    ) : (
        alert ( 'Você precisa escolher o tipo do código!')
    )
});