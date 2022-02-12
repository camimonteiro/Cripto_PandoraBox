// Criptografia
const formulario = document.forms.formulario;
const incrementoChave = document.createElement ('chave')
    incrementoChave.id = 'cifra'
    incrementoChave.type = 'numero'
    incrementoChave.placeholder = 'Digite o código!'

formulario.addEventListener ('enviar', function (evento){
    evento.preventDefault();

    const texto = formulario.texto.value;
    const escolha = formulario.escolha.value;
    const botoes = formulario.tipoAcao.value;
    let mensagem = "";

    if (escolha == 'cifraCesar') {
        mensagem = cifraCesar(botoes, texto, incrementoChave);
    } else {
        mensagem = base64 (botoes, texto);
    };

    let saidaTexto = documento.getElementById('textoFinal');
    saidaTexto.innerHTML = `${mensagem}`;
});

// Cifra de César - lógica

function cifraCesar (codificar, texto, incrementoChave) {
    incrementoChave = Number(incrementoChave);
    let mensagem = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let cod = letra.charCodeAt();

        if (codificar == 'codificar') {
            cod += incrementoChave;
        } else {
            cod -= incrementoChave;
        };
        mensagem += String.fromCharCode(cod);
    };
    return mensagem;
};

// Base 64 - lógica

function base64 (codificar, texto) {
    if (codificar == 'codificar') {
        return btoa (texto);
    } else {
        return atob (texto);
    };
};

// Mostra o resultado final
const mostra = (conteudo) => texto.innerText = conteudo ; textoFinal.appendChild( texto );


// Insere o incremento da Cifra de César!
document.querySelectorAll('select').forEach(select) => {

    select.addEventListener ('change', (event) => {
        const evento = event.target;
        const valorIncremento = document.getElementById ("incremento");
        
        evento.value === 'cifraCesar' ? valorIncremento.appendChild(incrementoChave) : incrementoChave.remove();
    }
};

// Checagem de preenchimento de todos os campos
botao.addEventListener( 'click', () => {

    !texto.value ? (
        alert ('O campo de mensagem é obrigatório!')
    ) : codigo.value === 'cifraCesar' && !incrementoChave.value ? (
        alert( 'Você tem que escolher a chave!')
    ) : codigo.value === 'base64' && texto.value? (
        exibeNaTela(base64())
    ) : codigo.value === 'cifraCesar' && texto.value ? (
        exibeNaTela(cifraCesar())
    ) : (
        alert ( 'Você precisa escolher o tipo do código!')
    )
})