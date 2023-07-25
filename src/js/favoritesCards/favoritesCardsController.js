import FavoritesCards from './favoritesCardsModel';
import * as view from './favoritesCardsView';

export default async function(state) {
    const favsList = state.favorites.favs;

    const favoritesCard = new FavoritesCards(favsList);
    await favoritesCard.getFavs();

    view.renderPage(favoritesCard.cards);

    addToFavListener();

    function addToFavListener() {
        Array.from(document.getElementsByClassName('card__like')).forEach((item) => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                // отслеживаем на какой лайк внутри карточки мы нажали по ее атрибуту dataset.id, 
                // чтобы определить какую именно карточку запушить в массив favorites
                const id = e.target.closest('.card').dataset.id;
                // добавляем/убираем нашу карточку в массив favorites
                state.favorites.toggleFav(id);
                // e.target.closest('.card__like') - мы отслеживаем именно так, чтобы при нажатии на <i></i> внутри этого дива все работало
                view.toggleFavoriteIcon(e.target.closest('.card__like'), state.favorites.isFav(id));
            })
        })
    }
}