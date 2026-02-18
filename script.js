
function btnparagrafo(){
    const corpo = document.body;

    corpo.style.backgroundColor = "#000000";
    corpo.style.backgroundColor = "#eb76c2";

    window.alert("É exatamente esse 'Ahh' que me move...")

    setTimeout(() => {
        corpo.style.backgroundColor = "";
        corpo.style.backgroundColor = "";
    }, 3000);
}

function typeWrite(letras){
    const textArray = letras.innerHTML.split('');
    letras.innerHTML = '';
    textArray.forEach(function(letra, i){
        setTimeout(function(){
            letras.innerHTML += letra;
        }, 180 * i,)
    });
}
const maquinaTxtNome = document.querySelector(".maquina-txt")
typeWrite(maquinaTxtNome)