import * as functions from './core/utils/functions.js';
import * as forms from './core/forms/forms.js';
import './core/modules/animation.js';
import './core/modules/sliders.js';
import './core/forms/select.js';
import './core/modules/hoverTabs.js';
import '../scss/style.scss';
import { numberGrover } from './core/modules/number-grover.js';
import { documentClick } from './core/events/click.js';
import { windowResize } from './core/events/resize.js';
import ScrollObserver from './core/utils/observer.js';

const init = () => {
	const $html = document.documentElement;
	$html.classList.add('loaded');

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

	document.addEventListener('click', documentClick);
	window.addEventListener('resize', windowResize);
};

window.addEventListener('load', init);
