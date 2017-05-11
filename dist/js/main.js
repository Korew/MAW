// https://www.npmjs.com/package/gulp-include

<<<<<<< HEAD
// $(function() {})

$('.section-carusel').slick({
  fade:true,
  dots: true,
  arrows:false,
  infinite: true,
  // autoplay: true,
  // autoplaySpeed:3000,
});
=======
//=require jquery/dist/jquery.js


$(function(){

 $('.toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});


})
>>>>>>> 25620964466fe5493bc03835c8acf62f49626c8a
