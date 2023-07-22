import Filter from './filterModel';
import * as view from './filterView';

export default function(state) {
    view.render();
    // создаем объект фильтра
    if (!state.filter) state.filter = new Filter();
    //получаем параметры для фильтра
    state.filter.getParams();
}