//
// Header Template ---
class headerTemplate extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<div id="header" class="header">
				<a class="logo-btn" href="index.html"><flash-icon class="flash">•</flash-icon>Curtis Hill</a>
				<div class="nav nav--mobile shadow">
					<button data-tab-target="#tab1" class="nav-item">About</button>
					<button data-tab-target="#tab2" class="nav-item">Education</button>
					<button data-tab-target="#tab3" class="nav-item">Projects</button>
					<button data-tab-target="#tab4" class="nav-item">Contact</button>
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
						<button data-tab-target="#tab5" class="footer-item">Privacy</button>
						<button data-tab-target="#tab6" class="footer-item">Site Map</button>
					</div>
				</div>
			</div>
		`;
	}
}
customElements.define('footer-template', footerTemplate);
