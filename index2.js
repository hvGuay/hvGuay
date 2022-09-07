let cuotas = 0;
let nombre = prompt("Ingrese su nombre por favor:");
alert(`Bienvenid@ ${nombre} a la web del Centro de Actividades Subacuáticas Escualo`);

let idcurso= parseInt(prompt("Elija un opción ingresando el número que corresponda:" + "\n1) Curso de buceo 1 estrella \n2) Curso de buceo 2 estrellas \n3) Curso de buceo 3 estrellas"));

while((idcurso!==1) && (idcurso!==2) && (idcurso!==3)){
    idcurso= parseInt(prompt("ERROR: Ingrese una opción válida:" + "\n1) Curso de buceo 1 estrella \n2) Curso de buceo 2 estrellas \n3) Curso de buceo 3 estrellas"));
}

const cursos = [
    {idcurso: 1, nivel: "1 estrella", precio: 30000, duracion: "75 días"},
    {idcurso: 2, nivel: "2 estrellas", precio: 21000, duracion: "45 días"},
    {idcurso: 3, nivel:"3 estrellas", precio: 54000, duracion: "90 días"}    
]
console.log(cursos);
let cursoElegido = cursos.find(item => item.idcurso === idcurso)
console.log(cursoElegido);
console.log(cursoElegido.precio);

let mensaje = `La duración del curso elegido es: ${cursoElegido.duracion} y el costo del mismo: $${cursoElegido.precio}`;
alert(mensaje);

alert("Realizando el pago en efectivo se le realizará un descuento del 15%");

let opcionDePago= prompt("Elija una opción de pago:" + "\n1) Tarjeta de crédito en 3 cuotas (sin interés) \n2) Tarjeta de crédito en 6 cuotas (sin interés) \n3) Tarjeta de crédito en 12 cuotas (sin interés) \n4) Contado efectivo (15% de descuento)");

while((opcionDePago!=1) && (opcionDePago!=2) && (opcionDePago!=3 && (opcionDePago!=4))){
    opcionDePago= prompt("ERROR: Ingrese una opción de pago válida:" + "\n1) Tarjeta de crédito en 3 cuotas (sin interés) \n2) Tarjeta de crédito en 6 cuotas (sin interés) \n3) Tarjeta de crédito en 12 cuotas (sin interés) \n4) Contado efectivo (15% de descuento)");
}

function subtotal (){
switch(opcionDePago){
    case "1":
        cuotas = (cursoElegido.precio)/3;
        break;
    case "2":
        cuotas = (cursoElegido.precio)/6;
        break;
    case "3":
        cuotas = (cursoElegido.precio)/12;
        break;   
    default:
        break;
    }
return cuotas;
}

if(opcionDePago=="4"){
    alert(`El costo total a pagar es ${cursoElegido.precio*0.85}`)
}else{
    alert(`El valor de cada cuota será: ${subtotal(opcionDePago)}`)
}
