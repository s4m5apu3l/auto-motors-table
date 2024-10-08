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
const delayPromise = delay =>
	new Promise((res, rej) => {
		setTimeout(res, delay);
	});

setTimeout(() => console.log(1), 1000);

delayPromise(1000).then(res => console.log(2));

setTimeout(() => console.log(3), 100);

delayPromise(2000).then(res => console.log(4));

setTimeout(() => console.log(5), 2000);

delayPromise(1000).then(res => console.log(6));

setTimeout(() => console.log(7), 1000);

delayPromise(5000).then(res => console.log(8));

//  3 1 2 6  7 4 5 8
