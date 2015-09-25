// uso de jquery
$(document).ready(function(){

    $("#ConvertirCF").click(convertircaf);
	$("#ConvertirFC").click(convertirfac);

});

function convertircaf(){
    var x = $("#valor1").val();
    var convertir = (1.8 * x) + 32;
    $("#res").html(convertir);
}
function convertirfac(){
    var x = $("#valor1").val();
    var convertir = (x - 32)/ 1.8;
    $("#res").html(convertir);

}