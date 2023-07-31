import loading from '../loading/loadingController';

export default function loadingPage() {
	document.querySelector('#app').innerHTML = '';
	loading();
}