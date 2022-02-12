// Criptografia
const formulario = document.forms.formulario;

formulario.addEventListener ("enviar", function (evento){
    evento.preventDefault ();

    let texto = formulario.texto.value;
    const escolha = formulario.escolha.value;
    const botoes = formulario.tipoAcao.value;
    let qtdIncremento = formulario.qtdIncremento.value;
    let mensagem = "";

    if (escolha == "cifraCesar") {
        mensagem = cifraCesar(botoes, texto, qtdIncremento);
    } else {
        mensagem = base64 (botoes, texto);
    };

    let saidaTexto = documento.getElementById("textoFinal");
    textoFinal.innerHTML = `${mensagem}`;
});

// Cifra de César - lógica

function cifraCesar (codificar, texto, qtdIncremento) {
    qtdIncremento = Number(qtdIncremento);
    let mensagem = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let cod = letra.charCodeAt ();

        if (codificar == "codificar") {
            cod += qtdIncremento;
        } else {
            cod -= qtdIncremento;
        };
        mensagem += String.fromCharCode(cod);
    };
    return mensagem;
};

// Base 64 - lógica

function base64 (codificar, texto) {
    if (codificar == "codificar") {
        return btoa (texto);
    } else {
        return atob (texto);
    };
};