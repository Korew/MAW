// https://www.npmjs.com/package/gulp-include
//=require jquery/dist/jquery.js
//=require slick-carousel/slick/slick.js

// $(function() {})




$(function(){

	$('.toggler').click(function(e){
		e.preventDefault();

		var target = $(this).attr('href');
		$(target).toggleClass('show');
	});

	$('.section-carusel').slick({
		fade:true,
		dots: true,
		arrows:false,
		infinite: true,
	  // autoplay: true,
	  // autoplaySpeed:3000,
	});

	$('.navbar-toggler').click(function(e){
	e.preventDefault();

	$('.navbar-nav').toggleClass('active');
	});
})
