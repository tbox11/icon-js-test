// Logic for Tom's prototype.
// ==========================
$(document).ready(function(){

	$( "#icon" ).click(function() {
  $( this ).addClass('selected-icon');
	$('.dl-bar').css('opacity', '1');
});

$('#icon').click(function() {
    $('#selection-counter').html(function(i, val) { return val*1+1 });
});

});
