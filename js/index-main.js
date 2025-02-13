document.addEventListener("DOMContentLoaded", function () {
    const texto = "Olá, sou Kevin Cruz!";
    const elemento = document.getElementById("texto");
    let index = 0;

    function escreverTexto() {
        if (index < texto.length) {
            elemento.innerHTML += texto.charAt(index);
            index++;
            setTimeout(escreverTexto, 70); // Ajuste o tempo para alterar a velocidade
        }
    }

    escreverTexto();
});

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".menu-home a");

    setTimeout(() => {
        links.forEach((link, index) => {
            setTimeout(() => {
                link.classList.add("show");
            }, index * 200); // Delay entre os links para efeito em cascata
        });
    }, 500); // Pequeno atraso antes de iniciar
});

document.addEventListener("DOMContentLoaded", function () {
    const viewSobre = document.querySelector(".view-sobre");

    function verificarScroll() {
        const posicao = viewSobre.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.8; // Quando 80% da tela mostrar a div, ativa o efeito

        if (posicao < alturaTela) {
            viewSobre.classList.add("mostrar");
        } else {
            viewSobre.classList.remove("mostrar");
        }
    }

    // Adiciona efeito ao rolar a página
    window.addEventListener("scroll", verificarScroll);

    // Chamada inicial para verificar se já está visível ao carregar
    verificarScroll();
});

document.addEventListener("DOMContentLoaded", function () {
    const viewSobre = document.querySelector(".view-sobre");
    const tecnologias = document.querySelector(".tecnologias");

    function verificarScroll() {
        const posicaoSobre = viewSobre.getBoundingClientRect().top;
        const alturaTela = window.innerHeight * 0.8; // Quando 80% da tela mostrar a div, ativa o efeito

        if (posicaoSobre < alturaTela) {
            viewSobre.classList.add("mostrar");
        } else {
            viewSobre.classList.remove("mostrar");
        }

        // Verifica a posição da div tecnologias
        const posicaoTecnologias = tecnologias.getBoundingClientRect().top;

        if (posicaoTecnologias < alturaTela) {
            tecnologias.classList.add("mostrar");
        } else {
            tecnologias.classList.remove("mostrar");
        }
    }

    // Adiciona efeito ao rolar a página
    window.addEventListener("scroll", verificarScroll);

    // Chamada inicial para verificar se já está visível ao carregar
    verificarScroll();
});




