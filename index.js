let nombre = prompt("Ingrese su nombre por favor:");
alert(`Bienvenid@ ${nombre} a la web del Centro de Actividades Subacuáticas Escualo`);

let cursoElegido= prompt("Elija un opción ingresando el número que corresponda:" + "\n1) Curso de buceo 1 estrella \n2) Curso de buceo 2 estrellas \n3) Curso de buceo 3 estrellas" );
let costoCurso = 0;
let cuotas = 0;

while((cursoElegido!=1) && (cursoElegido!=2) && (cursoElegido!=3)){
    cursoElegido= prompt("ERROR: Ingrese una opción válida:" + "\n1) Curso de buceo 1 estrella \n2) Curso de buceo 2 estrellas \n3) Curso de buceo 3 estrellas");
}

switch(cursoElegido){
    case "1":
        costoCurso=30000;
        break
    case "2":
        costoCurso=21000;
        break
    case "3":
        costoCurso=54000;
        break
    default:
        break   
}
alert(`El costo del curso elegido es: $${costoCurso}`);

alert("Realizando el pago en efectivo se le realizará un descuento del 15%");

let opcionDePago= prompt("Elija una opción de pago:" + "\n1) Tarjeta de crédito en 3 cuotas (sin interés) \n2) Tarjeta de crédito en 6 cuotas (sin interés) \n3) Tarjeta de crédito en 12 cuotas (sin interés) \n4) Contado efectivo (15% de descuento)");

while((opcionDePago!=1) && (opcionDePago!=2) && (opcionDePago!=3 && (opcionDePago!=4))){
    opcionDePago= prompt("ERROR: Ingrese una opción de pago válida:" + "\n1) Tarjeta de crédito en 3 cuotas (sin interés) \n2) Tarjeta de crédito en 6 cuotas (sin interés) \n3) Tarjeta de crédito en 12 cuotas (sin interés) \n4) Contado efectivo (15% de descuento)");
}


function subtotal (){
switch(opcionDePago){
    case "1":
        cuotas = costoCurso/3;
        break;
    case "2":
        cuotas = costoCurso/6;
        break;
    case "3":
        cuotas = costoCurso/12;
        break;   
    default:
        break;
    }
return cuotas;
}

if(opcionDePago=="4"){
    alert(`El costo total a pagar es ${costoCurso*0.85}`)
}else{
    alert(`El valor de cada cuota será: ${subtotal(opcionDePago)}`)
}


