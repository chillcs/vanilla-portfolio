//
// Header Template ---
class headerTemplate extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div id="header" class="header">
				<a class="logo-btn" href="index.html"><flash-icon class="flash">•</flash-icon>Curtis Hill</a>
				<div class="nav nav--mobile shadow">
					<a data-tab-target="#tab1" class="nav-item">About</a>
					<a data-tab-target="#tab2" class="nav-item">Education</a>
					<a data-tab-target="#tab3" class="nav-item">Projects</a>
					<a data-tab-target="#tab4" class="nav-item">Contact</a>
				</div>
				<button class="nav-btn nav-btn--hide shadow">☰</button>
			</div>
		`;
	}
}
customElements.define('header-template', headerTemplate);
//
// Footer Template ---
class footerTemplate extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div class="footer">
				<div class="footer-box1">
					<a class="copyright" href="index.html">© 1990-2021</a>
				</div>
				<div class="footer-box2">
					<div class="footer-nav">
						<a data-tab-target="#tab5" class="footer-item">Privacy</a>
						<a data-tab-target="#tab6" class="footer-item">Site Map</a>
					</div>
				</div>
			</div>
		`;
	}
}
customElements.define('footer-template', footerTemplate);
