// Insere o incremento da Cifra de César!
function mostraChave () {
    const selecao = document.getElementById ('escolha');
    const incremento = document.getElementById ('incremento');
    if (selecao.value === 'cifraCesar') {
        incremento.style.display = 'block';
    } else {
        incremento.style.display = 'none';
    }
};