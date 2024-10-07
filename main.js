document.addEventListener('DOMContentLoaded', () => {
	const openModalBtns = document.querySelector('.js-estimate-upload-btns');
	const modal = document.querySelector('.l-estimate__modal');
	const closeModalBtn = modal.querySelector('.close-modal-btn');

	openModalBtns.addEventListener('click', function (e) {
		if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
			modal.showModal();
		}
	});

	closeModalBtn.addEventListener('click', () => {
		document.querySelector('.l-button-upload span').textContent = 'Загрузить файл';
		modal.close();
	});

	document.getElementById('upload-file-i').addEventListener('change', function (event) {
		const file = event.target.files[0];
		if (file) {
			document.querySelector('.l-button-upload span').textContent = file.name;
		}
	});
});
