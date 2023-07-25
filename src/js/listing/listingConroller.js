import * as view from './listingView';

export default function(state) {
    view.render();

    state.results.forEach((item) => {
        view.renderCard(item, state.favorites.isFav(item.id));
    })

    // функция прослушки клика по лайку для добавления в избранное
    addToFavListener();

    state.emitter.subscribe('event:render-listing', () => {
        view.clearListingContainer();
        state.results.forEach((item) => {
            view.renderCard(item, state.favorites.isFav(item.id));
        })

        // функция прослушки клика по лайку для добавления в избранное
        addToFavListener();
    })

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