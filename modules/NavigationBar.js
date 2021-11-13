'use strict';

export const NavigationBarFunctionalities = {
	modes: {
		dark: {
			'--white': 'black',
			'--lilla': 'grey',
			'--blaxkForBoxShadow': 'white',
			buttonImg: 'images/sun.png',
			word: 'Dark mode',
			'--grey': 'rgb(234, 234, 247)',
			'--blue': 'yellow',
		},
		light: {
			'--white': 'white',
			'--lilla': 'rgb(234, 234, 247)',
			'--blaxkForBoxShadow': 'rgb(36, 36, 36)',
			buttonImg: 'images/moon.png',
			word: 'Light mode',
			'--grey': 'grey',
			'--blue': 'blue'
		},
	},
	centerNavigationLinksTextVertically: function () {
		const arrayOfNavigationLinksWrappers = Array.from(this.divAroundNavLinks);
		const height = arrayOfNavigationLinksWrappers[0].offsetHeight;
		arrayOfNavigationLinksWrappers.forEach((div) => (div.style.lineHeight = `${height}px`));
	},
	adjustHeightOfNavigationLinksWrapperForMobile: function () {
		this.divAroundNavLinksMobile.style.top = this.nav.offsetHeight + 'px';
		if (screen.availWidth > 600) {
			this.divAroundNavLinksMobile.style.display = 'none';
		}
	},
	handleHamburgerButtonClick: function () {
		this.hamburgerButton.classList.toggle('menuOpen');

		if (this.hamburgerButton.className.includes('menuOpen')) {
			this.divAroundNavLinksMobile.style.display = 'flex';
		} else {
			this.divAroundNavLinksMobile.style.display = 'none';
		}
	},
	toggleDarkOrLight: function (event) {
		if (event?.target) {
			this.darkMode = !this.darkMode;
			if (this.darkMode) {
				localStorage.setItem('darkMode', true);
			} else {
				localStorage.clear();
			}
		}

		const mode = this.darkMode ? this.modes.dark : this.modes.light;
		const opposite = this.darkMode ? this.modes.light : this.modes.dark;

		const r = document.querySelector(':root');

		for (const property in this.modes.dark) {
			r.style.setProperty(property, mode[property]);
		}

		this.toggleDarkOrLightModeButton.style.backgroundColor = mode['--white'];
		this.toggleDarkOrLightModeButton.style.color = opposite['--white'];
		this.toggleDarkOrLightModeButton.querySelector('img').src = mode.buttonImg;
      this.toggleDarkOrLightModeButton.querySelector('span').textContent = opposite.word;
      

	},
	build: function () {
		const nav = document.createElement('nav');
		nav.innerHTML = `
      <img src="images/logo.png" />
			<div id='divAroundVadLinks'>
				<a href="home.html" class='navAhref'>
					<div class="navigationLinkWrapper">Home</div>
				</a>
            <a href="cars.html" class='navAhref'>
					<div class="navigationLinkWrapper">Cars</div>
				</a>
            <a href="charging-points.html" class='navAhref'>
					<div class="navigationLinkWrapper">Charging points</div>
				</a>
			</div>

         <button id='toggleDarkOrLightMode'>
           <span> Dark mode</span>
         <img id='moon' src='./images/moon.png' alt='toggle dark  mode' style='width: 10px;'/>
      <img id='sun' src='./images/sun.png' alt='toggle light mode' style='width: 10px; display: none;'/>
      </button>

         <button id='hamburgerButton' >
   
           <div id='hamburgerline1'></div>
           <div  id='hamburgerline2'></div>
         
         </button>

         			<div id='divAroundVadLinksMobile'>
				<a href="home.html">
					<div class="navigationLinkWrapper">Home</div>
				</a>
            <a href="cars.html">
					<div class="navigationLinkWrapper">Cars</div>
				</a>
            <a href="charging-points.html">
					<div class="navigationLinkWrapper">Charging points</div>
				</a>
			</div>`;

		document.body.insertBefore(nav, document.body.firstChild);

		this.nav = document.querySelector('nav');
		this.hamburgerButton = document.querySelector('#hamburgerButton');
		this.divAroundNavLinksMobile = document.querySelector('#divAroundVadLinksMobile');
		this.divAroundNavLinks = document.querySelectorAll('.navigationLinkWrapper');
		this.toggleDarkOrLightModeButton = document.querySelector('#toggleDarkOrLightMode');
		this.darkMode =
			localStorage.getItem('darkMode') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
	},

	init: function () {
		this.build();
		this.toggleDarkOrLightModeButton.addEventListener('click', (e) => this.toggleDarkOrLight(e));
		this.divAroundNavLinksMobile.style.display = 'none';
		this.centerNavigationLinksTextVertically();
		if (this.darkMode) this.toggleDarkOrLight();
		window.addEventListener('resize', () => this.centerNavigationLinksTextVertically());

		this.adjustHeightOfNavigationLinksWrapperForMobile();
		window.addEventListener('resize', () => this.adjustHeightOfNavigationLinksWrapperForMobile());

		this.hamburgerButton.addEventListener('click', () => this.handleHamburgerButtonClick(), true);

		for (const link of Array.from(document.querySelectorAll('nav a'))) {
			const lastPieceOfUrl = '/' + window.location.href.split('/').at(-1);
			if (link.href.includes(lastPieceOfUrl)) {
				link.classList.toggle('active', true);
			}
		}
	},
};
