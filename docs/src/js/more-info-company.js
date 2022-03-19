let buttonMore = document.querySelector('.companies-items--more')
let buttonMoreImage = document.querySelector('.companies-items--more .more-text--arrow')
let buttonText = document.querySelector('.more-text')
let blockMoreInfo = document.querySelector('.more-info')

let blockCompany = document.querySelector('.body-company');

buttonMore.addEventListener('click', function(evt) {
	if (blockCompany.classList.contains('body-hidden')) {
		blockCompany.classList.remove('body-hidden')
		buttonMoreImage.classList.add('rotate')
		blockMoreInfo.classList.add('pad');
		buttonText.textContent = 'Скрыть'
	} else {
		blockCompany.classList.add('body-hidden')
		buttonMoreImage.classList.remove('rotate')
		blockMoreInfo.classList.remove('pad');
		buttonText.textContent = 'Показать ещё'
	}
});

