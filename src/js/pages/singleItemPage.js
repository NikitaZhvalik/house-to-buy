import singleItem from '../singleItem/singleItemController.js'

export default function (state) {
	document.querySelector('#app').innerHTML = '';
	singleItem(state);
}
