// Logic for Tom's prototype.
// ==========================
$(document).ready(function(){

	$( ".icon" ).click(function() {
  $( this ).toggleClass('selected-icon');
	$('.dl-bar').css('opacity', '1');
	$('#selection-counter').html(function(i, val) { return val*1+1 });
});

});
