function CalcularVoltaje() {
    var num1,num2;

    num1=Number(document.getElementsByName("ampv")[0].value);
    num2=Number(document.getElementsByName("omhv")[0].value);
    document.getElementsByName("Voltaje_Total") [0].innerHTML=num1*num2;

}

function CalcularCorriente() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltc")[0].value);
    num2=Number(document.getElementsByName("ohmc")[0].value);
    document.getElementsByName("Corriente_Total") [0].innerHTML=num1/num2;

}

function CalcularResistencia() {
    var num1,num2;

    num1=Number(document.getElementsByName("voltr")[0].value);
    num2=Number(document.getElementsByName("ampr")[0].value);
    document.getElementsByName("Resistencia_Total") [0].innerHTML=num1/num2;

}