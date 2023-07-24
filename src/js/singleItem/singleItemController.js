import SingleItem from './singleItemModel'
import * as view from './singleItemView';

export default function () {
    // передаем id
    state.singleItem = new SingleItem(state.routeParams );
    state.singleItem.getItem();
    view.render();
}