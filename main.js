document.addEventListener('DOMContentLoaded', () => {
	const openModalBtns = document.querySelector('.l-estimate__upload-btns');
	const modal = document.querySelector('.l-estimate__modal');
	const closeModalBtn = modal.querySelector('.close-modal-btn');

	openModalBtns.addEventListener('click', function (e) {
		if (e.target.tagName.toLowerCase() === 'button' || e.target.closest('button')) {
			modal.showModal();
		}
	});

	closeModalBtn.addEventListener('click', () => {
		modal.close();
	});
});
