$(document).ready(function() {
	$('section[data-type="bg-paralax"]').each(function() {
		var $bgobj = $(this);
		$(window).scroll(function() {
			var yPos = $bgobj.data('offset')-($(window).scrollTop() / $bgobj.data('speed'));
			var coords = '100% '+ yPos + 'px';
			$bgobj.css({backgroundPosition: coords});
		});
	});
});