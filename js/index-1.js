// uso de jquery
$(document).ready(function(){

    $("#suma").click(suma);
    $("#resta").click(resta);
    $("#multiplicacion").click(multiplicar);
    $("#division").click(dividir);
    $("#potencia").click(potencia);
});

function suma() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var suma = parseFloat(x) + parseFloat(y); //parseInt
    $("#res").html(suma);
}

function resta() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var resta = parseFloat(x) - parseFloat(y);
    $("#res").html(resta);
}

function multiplicar() {
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var multiplicar = x * y;
    $("#res").html(multiplicar);
}
function dividir(){
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var dividir = x / y;
    $("#res").html(dividir);
}

function potencia(){
    var x = $("#valor1").val();
    var y = $("#valor2").val();
    var potencia = math.pow(x,y);
    $("#res").html(potencia);
}