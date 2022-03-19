let buttonMoreRepair = document.querySelector('.repair-items--more')
let buttonMoreRepairImage = document.querySelector('.repair-items--more .more-text--arrow')
let buttonTextRepair = document.querySelector('.more-text--repair')
let blockMoreInfoRepair = document.querySelector('.more-info--repair')

let blockCompanyRepair = document.querySelector('.body-repair');

buttonMoreRepair.addEventListener('click', function(evt) {
	if (blockCompanyRepair.classList.contains('body-hidden')) {
		blockCompanyRepair.classList.remove('body-hidden')
		buttonMoreRepairImage.classList.add('rotate')
		blockMoreInfoRepair.classList.add('pad');
		buttonTextRepair.textContent = 'Скрыть'
	} else {
		blockCompanyRepair.classList.add('body-hidden')
		buttonMoreRepairImage.classList.remove('rotate')
		blockMoreInfoRepair.classList.remove('pad');
		buttonTextRepair.textContent = 'Показать ещё'
	}
});
