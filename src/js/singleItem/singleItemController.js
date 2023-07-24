import SingleItem from './singleItemModel'

export default function () {
    // передаем id
    state.singleItem = new SingleItem(state.routeParams );
    state.singleItem.getItem();

}