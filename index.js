
function oferta1 (){
    alert("El costo del curso 1 estrella es de $30.000")
    }

function oferta2 (){
    alert("El costo del curso 1 estrella es de $21.000")
    }

function oferta3 (){
    alert("El costo del curso 1 estrella es de $54.000")
    }


let cursoelegido1 = document.getElementById("1estrella");
let cursoelegido2 = document.getElementById("2estrellas");
let cursoelegido3 = document.getElementById("3estrellas");
cursoelegido1.addEventListener("click",oferta1);
cursoelegido2.addEventListener("click",oferta2);
cursoelegido3.addEventListener("click",oferta3);



