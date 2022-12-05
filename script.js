let i = 10;

function cuentaAtras(tiempo, pFunction) {

    let intervaloPrueba = setInterval( ()=>{
        if(tiempo === 0){
            let divExplosion = document.createElement("div");
            let imgExplosion = document.createElement("img");
            body.appendChild(divExplosion);
            divExplosion.appendChild(imgExplosion);
            //falta una etiqueta img para metamos la img con el src
            divExplosion.classList.add("divBomba");
            imgExplosion.src = "https://upload.wikimedia.org/wikipedia/commons/7/79/Operation_Upshot-Knothole_-_Badger_001.jpg"
            seccionCards.classList.add("ocultar");
            clearInterval(intervaloPrueba);
        } else {
            pFunction(tiempo);
            tiempo--;
        }
    }, 1000);
    
}

let body = document.querySelector("body");
let btnComenzar = document.querySelector("main button");
let seccionCards = document.querySelector(".cardContainer");

function crearCard(pTiempo) {
    //crear componentes Cards
    let divCard = document.createElement("div");
    divCard.classList.add("card","detallesCard");
    let textCard = document.createElement("p");
    textCard.classList.add("textCard");
    textCard.innerText = pTiempo;
    //armar Card y añadirla al body
    seccionCards.appendChild(divCard);
    divCard.appendChild(textCard);
}

btnComenzar.addEventListener("click", ()=> {
    btnComenzar.classList.add("ocultar");
    cuentaAtras(i, crearCard)
})