$(document).ready(function() {
	$('img').click(function() {
		$(this).hide();
	});
	$('ol li').hover(function() {
		$(this).addClass("active");
	}, function() {
		$(this).removeClass("active");
	});
	$('ul li').click(function() {
		$(this).toggleClass("strike")
	});
});