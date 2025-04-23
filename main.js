var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
	var aTag = aTags[i];
	aTag.addEventListener('click', function(e){
		var ele = e.target;
		window.location.replace(ele.getAttribute('data-href'));
	});
}

$(document).ready(function() {
	var contentPlacement = $('#banner').position().top + $('#banner').height();
	$('#body').css('margin-top', contentPlacement);
});