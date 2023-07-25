import FavoritesCards from './favoritesCardsModel';

export default async function(state) {
    const favsList = state.favorites.favs;

    const favoritesCard = new FavoritesCards(favsList);

    await favoritesCard.getFavs();
}