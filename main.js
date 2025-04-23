var aTags = document.querySelectorAll('span[data-href]');

for(var i = 0; i < aTags.length; i++){
	var aTag = aTags[i];
	aTag.addEventListener('click', function(e){
		var ele = e.target;
		window.location.replace(ele.getAttribute('data-href'));
	});
}

function adjustPadding() {
	const fixedDiv = document.querySelector('.Banner');
	const contentDiv = document.querySelector('#body');

	if(fixedDiv && contentDiv) {
		const fixedDivHeight = fixedDiv.offsetHeight;
		contentDiv.style.paddingTop = `${fixedDivHeight}px`;
	}
}

adjustPadding();
window.addEventListener('resize', adjustPadding);