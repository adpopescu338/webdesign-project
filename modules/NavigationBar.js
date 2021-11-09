'use strict'
export const NavigationBarFunctionalities = {
   darkMode: localStorage.getItem('darkMode'),
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
	toggleDarkOrLight: function () {
      this.toggleDarkOrLightModeButton.style.color = 'yellow'
      this.toggleDarkOrLightModeButton.style.backgroundColor= 'white'
   },
   build: function() {
      const nav = document.createElement('nav')
      nav.innerHTML = `
      <img src="images/logo.png" />
			<div id='divAroundVadLinks'>
				<a href="home.html" class='navAhref'>
					<div class="navigationLinkWrapper">Home</div>
				</a>
            <a href="cars.html" class='navAhref'>
					<div class="navigationLinkWrapper">Cars</div>
				</a>
            <a href="/" class='navAhref'>
					<div class="navigationLinkWrapper">Charging points</div>
				</a>
            <a href="/" class='navAhref'>
					<div class="navigationLinkWrapper">Contact us</div>
				</a>
			</div>

         <button id='toggleDarkOrLightMode'>
           <span> Dark mode</span>
         <img id='moon' src='./images/moon.png' alt='toggle dark  mode' style='width: 10px;'/>
      <img id='sun' src='./images/sun.png' alt='toggle light mode' style='width: 10px; display: none;'/>
      </button>

         <button id='hamburgerButton' style='background-color: rgba(0,0,0,0); border: none;'>
   
           <div id='hamburgerline1'></div>
           <div  id='hamburgerline2'></div>
         
         </button>

         			<div id='divAroundVadLinksMobile'>
				<a href="home.html">
					<div class="navigationLinkWrapper active">Home</div>
				</a>
            <a href="cars.html">
					<div class="navigationLinkWrapper">Cars</div>
				</a>
            <a href="/">
					<div class="navigationLinkWrapper">Charging points</div>
				</a>
            <a href="/">
					<div class="navigationLinkWrapper">Contact us</div>
				</a>
			</div>`;

      document.body.insertBefore(nav, document.body.firstChild)

      this.nav = document.querySelector('nav')
      this.hamburgerButton = document.querySelector('#hamburgerButton')
      this.divAroundNavLinksMobile= document.querySelector('#divAroundVadLinksMobile')
	this.divAroundNavLinks= document.querySelectorAll('.navigationLinkWrapper')
	this.toggleDarkOrLightModeButton= document.querySelector('#toggleDarkOrLightMode')
   },

   init: function () {
      this.build()
		this.toggleDarkOrLightModeButton.addEventListener('click', () => this.toggleDarkOrLight());
		this.divAroundNavLinksMobile.style.display = 'none';
		this.centerNavigationLinksTextVertically();
		window.addEventListener('resize', () => this.centerNavigationLinksTextVertically());

		this.adjustHeightOfNavigationLinksWrapperForMobile();
		window.addEventListener('resize', () => this.adjustHeightOfNavigationLinksWrapperForMobile());

      this.hamburgerButton.addEventListener('click', () => this.handleHamburgerButtonClick(), true);
      
      for (const link of Array.from(document.querySelectorAll('.navAhref'))) {
							const lastPieceOfUrl = '/' + window.location.href.split('/').at(-1);
							if (link.href.includes(lastPieceOfUrl)) {
								link.classList.toggle('active', true);
         }
						}
	},
};
