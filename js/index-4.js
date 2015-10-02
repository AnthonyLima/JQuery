/*

var fecha_hoy = new Date();

var mañana = fecha.setDate(hoy.getDate() + 1);

Math.floor() para redondear hacia arriba

*/

$(document).ready(function(){

	$("#calcular").click(CalcularFecha);

    //setTimeout(cambiar, 5000);
    setInterval(segundos, 1000);
});

function CalcularFecha(){
    var fecha_hoy = new date($("#fecha").val() + "T00:00:00-0500");
    var dias = $("#d").val();
    var meses = $("#m").val();
    var anios = $("#a").val();

    fecha_hoy.setDate(fecha_hoy.getDate() + parseInt(dias));
    fecha_hoy.setMonth(fecha_hoy.getMonth() + parseInt(meses));
    fecha_hoy.setFullYear(fecha_hoy.getFullYear() + parseInt(anios));

    $("#res").html(fecha_hoy.getFullYear() + "-" + (fecha_hoy.getMonth() + 1) + "-" + fecha_hoy.getDay());
}

function cambiar(){
    $("#res").html("listo");
}

function segundos(){
    var d = new date();
    $("#res").html(d.getSeconds());
}