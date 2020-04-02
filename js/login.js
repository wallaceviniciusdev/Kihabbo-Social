$(document).ready(function(){
	var palco = $("#palco"),
		titulo_palco = $("#palco .title"),
		cubo = $("#palco #logo");
	
	palco.addClass("animated bounceInDown");

	titulo_palco.hide();
	cubo.hide();

	setTimeout(
		function(){
			titulo_palco.fadeIn(300);
			titulo_palco.addClass("animated bounceInRight");
		}, 300);


	setTimeout(
		function(){
			cubo.fadeIn(300);
			cubo.addClass("animated tada");
		}, 800);


});