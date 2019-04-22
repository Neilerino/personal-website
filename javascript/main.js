$(document).ready(() => {
	$('#btn-about').off().on('click', () => {
		$('#main-section').animate({
			opacity: 0
		}, 500, () => {
			$('#main-section').toggleClass('d-none');
			$('#about-section').toggleClass('d-none');
			$('#about-section').animate({
				opacity: 1
			}, 500, () => {
				$('#about-section').css('opacity', '1');
			});
		});
	});

	$('#btn-exp').off().on('click', () => {

	});
});