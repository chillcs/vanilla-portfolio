// Open Mobile Menu ---
window.onload = function () {
	var navBtn = document.querySelector('.nav-btn');
	var navScreenMob = document.querySelector('.nav-screen--mob');
	navBtn.addEventListener('click', openNavScreenMob);
	function openNavScreenMob() {
		if (navScreenMob.classList.contains('hide')) {
			navScreenMob.classList.remove('hide');
			navBtn.style.transform = 'rotate(-45deg)';
		} else {
			navScreenMob.classList.add('hide');
			navBtn.style.transform = 'rotate(180deg)';
		}
	}
};
