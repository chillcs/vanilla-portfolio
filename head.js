// Open Mobile Menu ---
window.onload = function () {
	var navBtn = document.querySelector('.nav-btn');
	var navMob = document.querySelector('.nav--mob');
	var toggle = document.querySelector('.toggle');
	navBtn.addEventListener('click', toggleNav);
	function toggleNav() {
		if (navMob.classList.contains('toggle')) {
			navMob.classList.remove('toggle');
			navBtn.style.transform = 'rotate(-45deg)';
		} else {
			navMob.classList.add('toggle');
			navBtn.style.transform = 'rotate(180deg)';
		}
	}
};
