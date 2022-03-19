let buttonMore = document.querySelector('.about-company__main-column--text--more')
let buttonMoreImage = document.querySelector('.about-company__main-column--text--more .more-texts--arrows')
let buttonText = document.querySelector('.more-texts')

let blockCompany = document.querySelector('.about-company__main-column--text');

buttonMore.addEventListener('click', function(evt) {
	if (blockCompany.classList.contains('text-hidden')) {
		blockCompany.classList.remove('text-hidden')
		buttonMoreImage.classList.add('rotate')
		buttonText.textContent = 'Скрыть'
	} else {
		blockCompany.classList.add('text-hidden')
		buttonMoreImage.classList.remove('rotate')
		buttonText.textContent = 'Показать ещё'
	}
});
