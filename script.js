// Controle de tamanho da fonte

let tamanhoFonte = 16;

document.getElementById("aumentarFonte").addEventListener("click", () => {
    tamanhoFonte += 2;
    document.body.style.fontSize = tamanhoFonte + "px";
});

document.getElementById("diminuirFonte").addEventListener("click", () => {
    tamanhoFonte -= 2;

    if (tamanhoFonte < 12) {
        tamanhoFonte = 12;
    }

    document.body.style.fontSize = tamanhoFonte + "px";
});

// Alto contraste

document.getElementById("altoContraste").addEventListener("click", () => {
    document.body.classList.toggle("alto-contraste");
});

// Avaliação ambiental

document.getElementById("botaoResultado").addEventListener("click", () => {

    let p1 = Number(document.getElementById("pergunta1").value);
    let p2 = Number(document.getElementById("pergunta2").value);
    let p3 = Number(document.getElementById("pergunta3").value);

    let total = p1 + p2 + p3;

    let mensagem = "";

    if (total >= 5) {
        mensagem = "Parabéns! Você possui excelentes hábitos ambientais.";
    }
    else if (total >= 3) {
        mensagem = "Você possui bons hábitos ambientais, mas ainda pode melhorar.";
    }
    else {
        mensagem = "É importante desenvolver hábitos que ajudem a preservar a água.";
    }

    document.getElementById("resultado").innerText = mensagem;
});
