function CalcularVoltaje() {
    var num1,num2;

    num1=Number(document.getElementsByName("ampv")[0].value); //Igualo num1 a ampv
    num2=Number(document.getElementsByName("ohmv")[0].value); //Igualo num2 a ampv
    document.getElementsByName("Volataje_Total") [0].innerHTML=Math.round((num1*num2)*100)/100; //Hago la multiplicacion
}

function CalcularCorriente() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltc")[0].value); //Igualo num1 a voltc
    num2=Number(document.getElementsByName("ohmc")[0].value); //Igualo num2 a ohmc
    document.getElementsByName("Corriente_Total") [0].innerHTML=Math.round((num1/num2)*100)/100 ; //Hago la division
}

function CalcularResistencia() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltr")[0].value); //Igualo num2 a voltr
    num2=Number(document.getElementsByName("ampr")[0].value); //Igualo num2 a ampr
    document.getElementsByName("Resistencia_Total") [0].innerHTML=Math.round((num1/num2)*100)/100 //Hago la division
}


function GraficarVoltaje(posX,posY) {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    console.log(posX,posY);

    var imagen = new Image();
    imagen.src = "Imagenes/volt.png";

    canvas.width = canvas.width;

    imagen.onload = function () {

        ctx.drawImage(imagen, posX, posY);

    }

}

function GraficarCorriente(posX,posY) {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    console.log(posX,posY);

    var imagen = new Image();
    imagen.src = "Imagenes/amperios.png";

    canvas.width = canvas.width;

    imagen.onload = function () {

        ctx.drawImage(imagen, posX, posY);

    }

}

function GraficarResistencia(posX,posY) {

    var canvas = document.getElementById("Canvas");
    var ctx = canvas.getContext("2d");
    console.log(posX,posY);

    var imagen = new Image();
    imagen.src = "Imagenes/ohmio.png";

    canvas.width = canvas.width;

    imagen.onload = function () {

        ctx.drawImage(imagen, posX, posY);

    }

}
