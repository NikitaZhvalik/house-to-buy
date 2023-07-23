import * as view from './listingView';

export default function(state) {


    view.render();
    state.results.forEach((item) => {
        view.renderCard(item);
    })

    state.emitter.subscribe('event:render-listing', () => {
        console.log('emitter work');
    })
}