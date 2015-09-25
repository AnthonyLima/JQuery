// var valores = []; // arreglo (array) para valores

// valores = [23, 45, 34, 12, 34]; // definiendo valores, usar corchetes []

// valores.push(86); // agregando valores

// recorriendo por el arreglo
// la variable i representa el índice
/*
for(var i=0; i < valores.length; i++) {
	// escribir valor
	document.write(valores[i] + "<br>");
}
*/

// limpiando arreglo
// valores = [];


// uso de jquery
$(document).ready(function(){

	$("#agregar").click(agregar);

	$("#limpiar").click(limpiar);

	$("#sumatoria").click(sumatoria);

	$("#promedio").click();

	$("#mayor").click();

});
var listajs  = [];

function agregar(){
  listajs.push = $("#valor").val();
    var x = $("#valor").val();
    var etiqueta = $('<li>'+ x +'</li>')
    etiqueta.appendTo("ul");
}

function limpiar(){
    Listajs = [];
}

function sumatoria(){
    var suma;
    for(var i=0; i < Listajs.length; i++) {
        // escribir valor
        suma += Listajs[i];
    }
    $("#res").html(suma);
}
function promedio(){

}

