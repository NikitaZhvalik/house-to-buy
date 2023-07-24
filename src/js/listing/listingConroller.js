import * as view from './listingView';

export default function(state) {
    view.render();

    state.results.forEach((item) => {
        view.renderCard(item, state.favorites.isFav(item.id));
    })

    state.emitter.subscribe('event:render-listing', () => {
        view.clearListingContainer();
        state.results.forEach((item) => {
            view.renderCard(item);
        })
    })
}