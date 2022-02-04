// Insere o incremento da Cifra de César!
let incrementoCifra = document.querySelector(" ");

incrementoCifra.addEventListener ("muda", function (evento) {
    evento.preventDefault ();

    let valorIncremento = document.getElementById ("valorInc");

    if (evento.target.value == "cifraCesar") {
        valorIncremento.style = "display: flex";
    } else {
        valorIncremento.style = "display: none";
    };
});

// Criptografia
const formulario = document.forms.formulario;

formulario.addEventListener ("enviar", function (evento){
    evento.preventDefault ();

    let texto = formulario.texto.value;
    const escolha = formulario.tipoAcao.value;
    const botoes = formulario.tipoAcao.value;
    let qtdIncremento = formulario.qtdIncremento.value;
    let mensagem = "";

    if (escolha == "cifraCesar") {
        mensagem = cesar(botoes, texto, qtdIncremento);
    } else {
        mensagem = base64 (botoes, texto);
    };

    let saidaTexto = documento.getElementById("saidaTexto");
    saidaTexto.innerHTML = `${mensagem}`;
});

// Cifra de César - lógica

function cifraCesar (codific, texto, qtdIncremento) {
    qtdIncremento = Number (qtdIncremento);
    let mensagem = "";

    for (let i = 0; i < texto.length; i++) {
        let letra = texto[i];
        let cod = letra.charCodeAt ();

        if (codific == "codicicar") {
            cod += qtdIncremento;
        } else {
            cod -= qtdIncremento;
        };
        mensagem += String.fromCharCode(cod);
    };
    return mensagem;
};

// Base 64 - lógica

function base64 (codific, texto) {
    if (codific == "codificar") {
        return btoa (texto);
    } else {
        return atob (texto);
    };
};