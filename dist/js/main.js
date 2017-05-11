// https://www.npmjs.com/package/gulp-include

//=require jquery/dist/jquery.js


$(function(){

 $('.toggler').click(function(e){
 e.preventDefault();

	var target = $(this).attr('href');
	$(target).toggleClass('collapse');
});


})