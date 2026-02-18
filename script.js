
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

function typeWrite(elemento){
    const textArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textArray.forEach(function(letra, i){
        setTimeout(function(){
            elemento.innerHTML += letra;
        }, 180 * i,)
    });
}
const maquinaTxtNome = document.querySelector(".maquina-txt")
typeWrite(maquinaTxtNome)