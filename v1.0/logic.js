//
// Define Variables ---
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.nav-btn');
const footer = document.querySelector('.footer');
const projects = document.querySelectorAll('.project');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
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
		footer.classList.remove('footer--hide');
	});
});
//
// Toggle Mobile Menu ---
navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--mobile');
	footer.classList.toggle('footer--hide');
});
//
// Project Next/Prev Buttons ---
var projectCount = 0;
nextBtn.addEventListener('click', () => {
	projectCount++;
	if (projectCount < projects.length) {
		projects[projectCount - 1].classList.remove('project--active');
		projects[projectCount].classList.add('project--active');
	} else if (projectCount === projects.length) {
		projectCount--;
	}
});
prevBtn.addEventListener('click', () => {
	projectCount--;
	if (projectCount >= 0) {
		projects[projectCount + 1].classList.remove('project--active');
		projects[projectCount].classList.add('project--active');
	} else if (projectCount < 0) {
		projectCount++;
	}
});
