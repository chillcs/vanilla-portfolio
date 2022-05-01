//
//
// Page Navigation ---
//
const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
const nav = document.querySelector('.nav');
const footer = document.querySelector('.footer');
//
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
//
// Toggle Mobile Menu ---
//
const navBtn = document.querySelector('.nav-btn');
//
navBtn.addEventListener('click', () => {
	nav.classList.toggle('nav--mobile');
	footer.classList.toggle('footer--hide');
});
//
//
// Project Tab Selector ---
//
var proTabs = document.querySelectorAll('.pro-tab');
var proContents = document.querySelectorAll('.pro');
var proTabsFormatted = [];
//
proTabs.forEach((proTab) => {
	proTabsFormatted.push(proTab.textContent.trim());
	proTab.addEventListener('click', () => {
		// select and highlight active tab
		for (let i = 0; i < proTabs.length; i++) {
			proTabs[i].classList.remove('pro-tab--active');
		}
		proTab.classList.add('pro-tab--active');
		// create index position and store it in a variable
		var proIndex = proTabsFormatted.indexOf(proTab.textContent.trim());
		// display content based on index position
		proContents.forEach((proContent) => {
			proContent.classList.remove('pro--active');
		});
		proContents[proIndex].classList.add('pro--active');
	});
});
//
//
// Education Tab Selector ---
//
var eduTabs = document.querySelectorAll('.edu-tab');
var eduContents = document.querySelectorAll('.edu');
var eduTabsFormatted = [];
//
eduTabs.forEach((eduTab) => {
	eduTabsFormatted.push(eduTab.textContent.trim());
	eduTab.addEventListener('click', () => {
		// select and highlight active tab
		for (let i = 0; i < eduTabs.length; i++) {
			eduTabs[i].classList.remove('edu-tab--active');
		}
		eduTab.classList.add('edu-tab--active');
		// create index position and store it in a variable
		var eduIndex = eduTabsFormatted.indexOf(eduTab.textContent.trim());
		// display content based on index position
		eduContents.forEach((eduContent) => {
			eduContent.classList.remove('edu--active');
		});
		eduContents[eduIndex].classList.add('edu--active');
	});
});
//
//
// Project Back/Next Buttons (Unused) ---
//
/*
const projects = document.querySelectorAll('.project');
const backBtn = document.querySelector('.p-btn-back');
const nextBtn = document.querySelector('.p-btn-next');
var projectCount = 0;
//
backBtn.addEventListener('click', () => {
	projectCount--;
	if (projectCount >= 0) {
		projects[projectCount + 1].classList.remove('project--active');
		projects[projectCount].classList.add('project--active');
	} else if (projectCount < 0) {
		projectCount++;
	}
});
nextBtn.addEventListener('click', () => {
	projectCount++;
	if (projectCount < projects.length) {
		projects[projectCount - 1].classList.remove('project--active');
		projects[projectCount].classList.add('project--active');
	} else if (projectCount === projects.length) {
		projectCount--;
	}
});
*/
