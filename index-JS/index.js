document.addEventListener("DOMContentLoaded", clear)
function clear() {
	for (const i in progress) {
		if (Object.hasOwnProperty.call(progress, i)) {
			progress[i].style.width = '0';
			percent[i].value = '';
		}
	}
	chess();
}


const percent = document.getElementsByClassName('degree__percent');
const progress = document.getElementsByClassName('degree__progress');
for (const i in percent) {
	if (Object.hasOwnProperty.call(percent, i)) {
		percent[i].addEventListener("keyup", fill);
		function fill() {
			progress[i].style.width = percent[i].value + '%';
			console.log(progress[i].style.width);
		}
	}
}

const work = document.getElementsByClassName('work-bunner__item');
const workBlock = document.querySelector('.work-bunner__content');
let count = workBlock.children.length;
window.addEventListener("resize", chess);
function chess() {
	let key = Math.floor(parseInt(workBlock.offsetWidth) / (parseInt(work[0].offsetWidth)));
	switch (key) {
		case 1:
			for (const key in work) {
				if (Object.hasOwnProperty.call(work, key)) {
					work[key].style.background = "";
					if (key % 2 == 0) {
						work[key].classList.toggle('_active')
					}
				}
			}
			break;
		case 2:
			for (const key in work) {
				if (Object.hasOwnProperty.call(work, key)) {
					work[key].style.background = "";
					if (key < 2) {
						if (key % 2 == 0) {
							work[key].classList.toggle('_active')
						}
					}
					if (key < 4 && key >= 2) {
						if (key % 2 == 1) {
							work[key].classList.toggle('_active')
						}
					}
					if (key < 6 && key >= 4) {
						if (key % 2 == 0) {
							work[key].classList.toggle('_active')
						}
					}
					if (key < 8 && key >= 6) {
						if (key % 2 == 1) {
							work[key].classList.toggle('_active')
						}
					}
				}
			}
			break;
		case 3:
			for (const key in work) {
				if (Object.hasOwnProperty.call(work, key)) {
					work[key].style.background = "";
					if (key % 2 == 0) {
						work[key].classList.toggle('_active')
					}
				}
			}
			break;
		case 4:
			for (const key in work) {
				if (Object.hasOwnProperty.call(work, key)) {
					if (key < 4) {
						if (key % 2 == 0) {
							work[key].classList.toggle('_active')
						}
					}
					else {
						if (key % 2 == 1) {
							work[key].classList.toggle('_active')
						}
					}
				}
			}
			break;

		default:
			break;
	}
}