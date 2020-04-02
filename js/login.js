$(document).ready(function(){
	var palco = $("#palco"),
		titulo_palco = $("#palco .title"),
		cubo = $("#palco #logo"),
		player = $("#player"),
		title_login = $("section#form-login .title"),
		h1_login = $("section#form-login .title h1"),
		p_login = $("section#form-login .title p"),
		form_login = $("section#form-login form#login");
	
	palco.addClass("animated bounceInDown");

	titulo_palco.hide();
	cubo.hide();
	player.hide();
	title_login.hide();
	h1_login.hide();
	p_login.hide();
	form_login.hide();
	$(".about").hide();

	setTimeout(
		function(){
			titulo_palco.fadeIn(300);
			titulo_palco.addClass("animated bounceInRight");
		}, 300);

	setTimeout(
		function(){
			player.fadeIn(300);
			player.addClass("animated slideInUpPlayer");
		}, 500);

	setTimeout(
		function(){
			title_login.fadeIn(300);
			title_login.addClass("animated slideInDown");
		}, 500);

	setTimeout(
		function(){
			h1_login.fadeIn(300);
			h1_login.addClass("animated slideInDown");
			p_login.fadeIn(300);
			p_login.addClass("animated slideInDown");
		}, 1000);

	setTimeout(
		function(){
			form_login.fadeIn(700);
			form_login.addClass("animated slideInUp");
			$(".about").fadeIn(500);
			$(".about").addClass("animated slideInLeft");
		}, 500);

	setTimeout(
		function(){
			cubo.fadeIn(300);
			cubo.addClass("animated tada");
		}, 800);



	


	function playButton(){
		var button = $("#player .play");

		button.click(function(){
			$(this).css({"content": "\f04c"});
		});
	}

	playButton();


});