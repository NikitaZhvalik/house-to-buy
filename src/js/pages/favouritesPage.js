import favoritesCards from "../favoritesCards/favoritesCardsController";

export default function () {
	document.querySelector('#app').innerHTML = '';
	favoritesCards(state);
}
