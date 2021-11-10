'use strict';
import { Footer } from './modules/Footer.js';
import { NavigationBarFunctionalities } from './modules/NavigationBar.js';

!function addPolyfillForFetch () {
   //to use fetch API in old browsers
   const script = document.createElement('script')
   script.src = 'https://unpkg.com/unfetch/polyfill';
   document.querySelector('head').appendChild(script)
}()

NavigationBarFunctionalities.init();
Footer.init();

export function appendCreditForCars(string, href) {
	const link = href.replace('https://www.', '').replace('http://www.').split('/')[0];
	const div = document.createElement('div');
	div.style.textAlign = 'center';

	div.innerHTML = `<span>${string} <a href='${href}' target='_blank'>${link}</a></span>`;
	document.querySelector('main').appendChild(div);
}
