//
// Page Navigation ---
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('tab--active');
		});
		target.classList.add('tab--active');
	});
});
//
// Toggle Mobile Menu ---
var navBtn = document.querySelector('.nav-btn');
var nav = document.querySelector('.nav');

navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--mobile');
});
