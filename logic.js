//
// Define Variables ---
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-btn');
//
// Page Navigation ---
tabs.forEach((tab) => {
	tab.addEventListener('click', () => {
		var target = document.querySelector(tab.dataset.tabTarget);
		tabContents.forEach((tabContent) => {
			tabContent.classList.remove('tab--active');
		});
		target.classList.add('tab--active');
		nav.classList.add('nav--mobile'); // hides mobile menu
	});
});
//
// Toggle Mobile Menu ---
navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--mobile');
});
