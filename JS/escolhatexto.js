// Muda texto do botão dependendo do que escolhe ~Codificar ou Decodificar
let btn = document.querySelectorAll('input[name="codificar"]');
btn.forEach ((radio) => {
    radio.addEventListener ("change", function (evento) {
        evento.preventDefault ();

        let enviar = document.getElementById("enviar");

        if (evento.target.value == "decodificar") {
            enviar.innerHTML = "Decodificar mensagem!";
        } else {
            enviar.innerHTML = "Codificar mensagem!";
        }
    });
});