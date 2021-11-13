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

export function appendCreditForCars(string, ...hrefs) {
   const links = hrefs.map(h=>`<a class='creditLinks' href='${h}' target='_blank'>${h.replace('https://www.', '').split('/')[ 0 ]}</a>`)
	const div = document.createElement('div');
	div.style.textAlign = 'center';

	div.innerHTML = `<span>${string} ${links}</span>`;
	document.querySelector('main').appendChild(div);
}