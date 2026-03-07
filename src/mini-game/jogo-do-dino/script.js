const dino = window.document.getElementById("dino");
const box = window.document.getElementById("box");
const score = window.document.getElementById("score");

let cronometro;
let motorJogo;

// fazendo funcão para chamar a class jump animation da css e remover logo em seguida

function iniciar() {

    clearInterval(motorJogo);
    clearInterval(cronometro);
    // tira o foto do botão iniciar
    if(document.activeElement){
        document.activeElement.blur();
    }
    // faz uma contagem 3,2,1 antes de iniciar o game
    let temp = 3;
    cronometro = setInterval(() => {
        if (temp > 0){
            score.innerText = temp;
            temp--;
        } else {
            clearInterval(cronometro);
            score.innerText = 0;
            rodarJogo();
        }
    }, 1000)
} 

function jump(){
    dino.classList.add('jump-animation');
    setTimeout(() => {
        dino.classList.remove('jump-animation');
    }, 500);
}

//definindo evento para a função, assim que qualquer tecla(teclado) for apertada, dispara a função, mas não deixa apertar de novo se o dino ainda estiver no ar.

document.addEventListener('keypress', () => {
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
})

document.addEventListener('mousedown', () => {
    if(!dino.classList.contains('jump-animation')){
        jump();
    }
})

document.addEventListener('touchstart', (e) => {
    if(e.touches.length === 1){
        if(!dino.classList.contains('jump-animation')){
            jump();
        }
    }
}, {passive: false});

// definindo o estilo computado(top e left) do dinossauro e da caixa para fazer o loop do game

// só mostra a pedra se o valor for positivo.
function rodarJogo(){

    clearInterval(motorJogo);
    clearInterval(cronometro);
    // liga a caixa
    box.classList.add('box-animation');

    motorJogo = setInterval(() => {
        const dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));

        const boxLeft = parseInt(window.getComputedStyle(box).getPropertyValue('left'));
        // agora o placar aumenta conforme você pula a caixa
        if(boxLeft < 0) {
            if (box.style.display !== 'none') {
                score.innerText++;
            }
            box.style.display = "";
        }

        // detectando a colisão

        if (boxLeft < 50 && boxLeft > 0 && dinoTop > 160) {
            clearInterval(motorJogo);
            alert("Aii, você bateu!")
            score.innerHTML = 'Fim de Jogo! Sua Pontuação é: ' +  score.innerText;
            // a animação inicia e finaliza conforme o jogo ocorre
            box.classList.remove('box-animation')
        }


    }, 50);
}