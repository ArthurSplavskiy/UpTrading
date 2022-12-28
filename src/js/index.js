import * as functions from './core/utils/functions.js';
import * as forms from './core/forms/forms.js';
import './core/modules/animation.js';
import './core/modules/sliders.js';
//import './core/forms/select.js';
import './core/modules/hoverTabs.js';
import '../scss/style.scss';
import { numberGrover } from './core/modules/number-grover.js';
import { documentClick } from './core/events/click.js';
import { windowResize } from './core/events/resize.js';
import ScrollObserver from './core/utils/observer.js';

const $preloader = document.querySelector('.preloader');

function funPreloader() {
	$preloader.classList.add('preloader_hide');
	setTimeout(function () {
		animateStart();
	}, 400);
	setTimeout(function () {
		$preloader.remove();
	}, 1000);
}

const hidePreloaderByCookie = (cookies) => {
	const firstLoad = cookies
		.split(';')
		.filter((c) => c.includes('firstLoad'))?.[0]
		?.split('=')?.[1];

	if (!Boolean(firstLoad)) {
		$preloader.remove();
		funPreloader();
	} else if (!$preloader.classList.contains('preloader_hide')) {
		setTimeout(() => {
			funPreloader();
		}, 4000);
	}
};

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

	const firstLoad = document.cookie.split(';').filter((c) => c.includes('firstLoad'));

	if (navigator.appVersion.indexOf('Win') != -1) {
		$html.classList.add('on-windows');
	}
	if (navigator.appVersion.indexOf('Mac') != -1) {
	}
	if (navigator.appVersion.indexOf('X11') != -1) {
	}
	if (navigator.appVersion.indexOf('Linux') != -1) {
	}

	forms.formFieldsInit();
	forms.formSubmit(true);
	functions.setPhoneMask();
	functions.spollers();
	functions.tabs();

	new ScrollObserver({
		element: '.s-about-numbers',
		animationIn: () => numberGrover(90),
		observerOptions: {
			threshold: 0.1
		}
	});

	hidePreloaderByCookie(document.cookie);

	document.addEventListener('click', documentClick);
	window.addEventListener('resize', windowResize);
};

window.addEventListener('load', init);
