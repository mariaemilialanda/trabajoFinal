let imagen1 = document.querySelector ("#imagen1");
let imagen2 = document.querySelector ("#imagen2");
let imagen3 = document.querySelector ("#imagen3");
let destino = document.querySelector (".cuadroDeArrastre");

imagen1.addEventListener ('dragstart', inicioTraslado1);
imagen2.addEventListener ('dragstart', inicioTraslado2);
imagen3.addEventListener ('dragstart', inicioTraslado3);

imagen1.addEventListener ('dragend', finalTraslado);
imagen1.addEventListener ('dragend', finalTraslado);
imagen1.addEventListener ('dragend', finalTraslado);

function inicioTraslado1 (evento) {
    evento.dataTransfer.setData ('Text', "./imagenes/rompe2.png")
};
function inicioTraslado2 (evento) {
    evento.dataTransfer.setData ('Text', "./imagenes/rompe1.png")
};
function inicioTraslado3 (evento) {
    evento.dataTransfer.setData ('Text', "./imagenes/rompe3.png")
};

function finalTraslado (evento) {
    let imagen= evento.target;
    imagen.style.visibility='hidden';
};

destino.addEventListener ('dragover', prevenirDefault);

destino.addEventListener ('drop', soltarElemento);

function soltarElemento (evento) {
    let dataimagen= evento.dataTransfer.getData ('Text');
    destino.innerHTML=`<img id="imagen" src"${dataimagen}"/>`
}
