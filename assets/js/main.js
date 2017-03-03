// Logic for Tom's prototype.
// ==========================

$(document).ready(function() {
	
	var numSelectedIcons = 0;

	$('.icon').click(function() {

		var iconIsSelected = $(this).hasClass('selected-icon');

		// If Icon has already been clicked, then:
		if (iconIsSelected) {

			// 1. Decrease the counter variable.
			numSelectedIcons = numSelectedIcons - 1;

			// 2. Remove the selected class.
			$(this).removeClass('selected-icon');

			// 3. Update the selection counter to our counter variable value.
			$('#selection-counter').html(numSelectedIcons);

			// 4. If our counter is less-than or equal to 0, ALSO
			//     hide the download bar.
			if (numSelectedIcons <= 0) {
				$('.dl-bar').css('opacity', '0');
			}

		// If Icon has NOT been clicked, then:
		} else {

			// 1. Increase our counter variable.
			numSelectedIcons = numSelectedIcons + 1;

			// 2. Add selected class.
			$(this).addClass('selected-icon');

			// 3. Show the download bar.
			$('.dl-bar').css('opacity', '1');

			// 4. Update the selection counter with our counter variable value.
			$('#selection-counter').html(numSelectedIcons);


			// FOR DOWNLOAD
			// - Get the src of the icon
			// - and set th href of the DL link to it

		}	

	});

});