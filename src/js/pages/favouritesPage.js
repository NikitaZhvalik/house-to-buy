import favoritesCards from "../favoritesCards/favoritesCardsController";

export default function (state) {
	document.querySelector('#app').innerHTML = '';
	favoritesCards(state);
}
