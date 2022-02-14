// Peguei todos os elementos necessários no HTML
let textoEntrada = document.getElementById ('textoEntrada');
let mensagemSaida = document.getElementById ('textoFinal');
let botao = document.getElementById ('enviar');
const selecao = document.getElementById ('escolha'); 
const codificar = document.getElementById ('codificar')


// Mostra o resultado final
botao.addEventListener ('click', function (evento) {
    evento.preventDefault ();
    if (selecao == 'cifraCesar') {
        codCifra ();
    } else {
        codBase64 ();
    };
});

// Base 64 - Lógica
const codBase64 = () => {
    let entrada = textoEntrada.value;
    if (codificar.checked) {
        let baseTextCod = btoa (entrada);
        mensagemSaida.innerText = baseTextCod;
    } else {
        let baseTextDecod = atob (entrada);
        mensagemSaida.innerText = baseTextDecod;
    };
};

// Cifra de Cesar - lógica
const codCifra = () => {
    const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
    let entrada = textoEntrada.value;
    entrada = entrada.toLowerCase();
    const chave = document.getElementById ('incremento');
    const incrementoChave = parseInt(chave.value);
    let textoCodificado = [];

    for (let i = 0; i < entrada.length; i++) {
        if (entrada[i] != ' ') {
            for (let x = 0; x < alfabeto.length; x++) {
                if (entrada[i] == alfabeto[x]) {
                    if (botao.textContent === 'Codificar') {
                        textoCodificado[i] = alfabeto [(x + incrementoChave)];
                    } else if (botao.textContent === 'Decodificar') {
                        textoCodificado[i] = alfabeto[(x - incrementoChave)];
                    };
                };
            };
        } else {
            textoCodificado[i] = ' ';
        }
    }
    mensagemSaida.innerText = textoCodificado.join('');
};