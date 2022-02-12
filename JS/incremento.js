// Insere o incremento da Cifra de César!
let incrementoCifra = document.querySelector("select");

incrementoCifra.addEventListener ("change", function (evento) {
    evento.preventDefault ();

    let valorIncremento = document.getElementById ("incremento");

    if (evento.target.value == "cifraCesar") {
        valorIncremento.style = "display: flex";
    } else {
        valorIncremento.style = "display: none";
    };
});