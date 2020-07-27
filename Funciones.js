function CalcularVoltaje() {
    var num1,num2;

    num1=Number(document.getElementsByName("ampv")[0].value);
    num2=Number(document.getElementsByName("ohmv")[0].value);
    document.getElementsByName("Voltaje_Total") [0].innerHTML=Math.round((num1*num2)*100)/100;
}

function CalcularCorriente() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltc")[0].value);
    num2=Number(document.getElementsByName("ohmc")[0].value);
    document.getElementsByName("Corriente_Total") [0].innerHTML=Math.round((num1/num2)*100)/100 ;
}

function CalcularResistencia() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltr")[0].value);
    num2=Number(document.getElementsByName("ampr")[0].value);
    document.getElementsByName("Resistencia_Total") [0].innerHTML=Math.round((num1/num2)*100)/100
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
